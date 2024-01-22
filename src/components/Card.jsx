import React from "react";

export default function Card({ title, subtitle, desc }) {
  return (
    <>
      <div className="card mb-3" style={{ maxWidth: 540 + "px" }}>
        <div className="row g-0">
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{desc}</p>
              <p className="card-text">
                <small className="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </p>
            </div>
          </div>
          <div className="col-md-4 bg-dark text-secondary d-flex-center">
            Thumbnail
          </div>
        </div>
      </div>
    </>
  );
}
