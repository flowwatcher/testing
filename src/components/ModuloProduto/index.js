import React, { useState, useEffect, useRef } from "react";

export default function ({ data }) {
  const [cardAberto, setCardAberto] = useState(
    Array(data.container.modules.length).fill(false)
  );
  const cardRefs = useRef(data.container.modules.map(() => React.createRef()));
  const listenersRef = useRef([]);

  useEffect(() => {
    const handleCardToggle = (index) => {
      setCardAberto((prev) => {
        const newState = [...prev];
        newState[index] = !newState[index];
        return newState;
      });
    };

    data.container.modules.forEach((_, index) => {
      const cardElement = cardRefs.current[index].current;
      if (cardElement) {
        const showListener = () => handleCardToggle(index);
        const hideListener = () => handleCardToggle(index);
        listenersRef.current[index] = { showListener, hideListener };

        cardElement.addEventListener("show.bs.collapse", showListener);
        cardElement.addEventListener("hide.bs.collapse", hideListener);
      }
    });

    return () => {
      data.container.modules.forEach((_, index) => {
        const cardElement = cardRefs.current[index].current;
        if (cardElement) {
          const { showListener, hideListener } = listenersRef.current[index];
          cardElement.removeEventListener("show.bs.collapse", showListener);
          cardElement.removeEventListener("hide.bs.collapse", hideListener);
        }
      });
    };
  }, [data.container.modules]);

  return (
    <div className="container fontSpace">
      <div className="row containerGridGapper">
        {data.container.modules.map((module, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-12">
            {module.box === "sim" ? (
              <div className="box">
                <div className="box-content">
                  <div className="box-button container-fluid">
                    <i className={`box-icon bi ${module.icon}`}></i>
                    <span className="boxCellText">{module.name}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="card fontSpace">
                <div className="card-content" ref={cardRefs.current[index]}>
                  <button
                    className="btn card-button container-fluid"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#cell${index}`}
                    aria-expanded={cardAberto[index] ? "true" : "false"}
                    aria-controls={`cell${index}`}
                  >
                    <span className="iconWidther ">
                      <i className={`card-icon bi ${module.icon}`}></i>
                    </span>
                    <span className="cardCellText">{module.name}</span>
                    <span className="ddWidther">
                      <i
                        className={`card-icon bi ${
                          cardAberto[index]
                            ? "ddiconmodOpen"
                            : "ddiconmodClosed"
                        }`}
                        id="iconCell"
                      ></i>
                    </span>
                  </button>
                  <div
                    className={`collapse ${cardAberto[index] ? "show" : ""}`}
                    id={`cell${index}`}
                  >
                    <div className="card-body fontSpace">
                      {module.features ? (
                        <ul className="ulStyleColapse">
                          {module.features.map((feature, i) => (
                            <li key={i} className="liStyleCollapse">
                              {feature}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <span className="cardCellDesc">
                          {module.description}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="containerBtnGridGapper fontSpace row">
        <button
          className="btn btnModGrid col-lg-12 col-md-6 col-sm-12"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#modalProduto"
        >
          {data.container.buttonText}
        </button>
      </div>
    </div>
  );
}
