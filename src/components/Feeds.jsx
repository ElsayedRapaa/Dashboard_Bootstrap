import React from "react";

function Feeds() {
  return (
    <div>
      <div className="h4 fw-normal">Feeds</div>
      <p className="text-secondary fw-normal pb-2">Widget you can use</p>
      <div className="d-flex flex-column gap-4">
        <div className="feed_item d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-3 py-1">
            <div
              className="bg-primary d-flex justify-content-center align-items-center"
              style={{ width: "30px", height: "30px", borderRadius: "50%" }}
            >
              <i className="ri-notification-line text-white"></i>
            </div>
            <div>Cras justo odio</div>
          </div>
          <div className="text-secondary" style={{ fontSize: "14px" }}>
            6 minute ago
          </div>
        </div>
        <div className="feed_item d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-3 py-1">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                backgroundColor: "#2E82D9",
              }}
            >
              <i className="ri-user-line text-white"></i>
            </div>
            <div>New user registered.</div>
          </div>
          <div className="text-secondary" style={{ fontSize: "14px" }}>
            6 minute ago
          </div>
        </div>
        <div className="feed_item d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-3 py-1">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                backgroundColor: "#D14252",
              }}
            >
              <i className="ri-hard-drive-2-line text-white"></i>
            </div>
            <div>Server #1 overloaded.</div>
          </div>
          <div className="text-secondary" style={{ fontSize: "14px" }}>
            6 minute ago
          </div>
        </div>
        <div className="feed_item d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-3 py-1">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                backgroundColor: "#099C95",
              }}
            >
              <i className="ri-checkbox-line text-white"></i>
            </div>
            <div>New order received.</div>
          </div>
          <div className="text-secondary" style={{ fontSize: "14px" }}>
            6 minute ago
          </div>
        </div>
        <div className="feed_item d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-3 py-1">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                backgroundColor: "#2C3136",
              }}
            >
              <i className="ri-notification-line text-white"></i>
            </div>
            <div>Cras justo odio</div>
          </div>
          <div className="text-secondary" style={{ fontSize: "14px" }}>
            6 minute ago
          </div>
        </div>
        <div className="feed_item d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-3 py-1">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                backgroundColor: "#CA8501",
              }}
            >
              <i className="ri-hard-drive-2-line text-white"></i>
            </div>
            <div>Server #1 overloaded.</div>
          </div>
          <div className="text-secondary" style={{ fontSize: "14px" }}>
            6 minute ago
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feeds;
