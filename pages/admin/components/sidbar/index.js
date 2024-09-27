"use client"; // Next.js 13 client-side component

import Link from "next/link";
import { useState } from "react";

const OffcanvasSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="col-xl-3">
      {/* Responsive offcanvas body START */}
      <div
        className={`offcanvas-xl offcanvas-end ${isOpen ? "show" : ""}`}
        tabIndex="-1"
        id="offcanvasSidebar"
      >
        {/* Offcanvas header */}
        <div className="offcanvas-header bg-light">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
            My profile
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            data-bs-target="#offcanvasSidebar"
            aria-label="Close"
            onClick={() => setIsOpen(!isOpen)}
          ></button>
        </div>
        {/* Offcanvas body */}
        <div className="offcanvas-body p-3 p-xl-0">
          <div className="bg-dark border rounded-3 pb-0 p-3 w-100">
            {/* Dashboard menu */}
            <div className="list-group list-group-dark list-group-borderless">
              <Link
                href="/instructor-dashboard"
                className="list-group-item active"
              >
                <i className="bi bi-ui-checks-grid fa-fw me-2"></i>
                Dashboard
              </Link>
              <Link
                href="/instructor-manage-course"
                className="list-group-item"
              >
                <i className="bi bi-basket fa-fw me-2"></i>
                My Courses
              </Link>
              <Link href="/instructor-quiz" className="list-group-item">
                <i className="bi bi-question-diamond fa-fw me-2"></i>
                Quiz
              </Link>
              <Link href="/instructor-earning" className="list-group-item">
                <i className="bi bi-graph-up fa-fw me-2"></i>
                Earnings
              </Link>
              <Link href="/instructor-studentlist" className="list-group-item">
                <i className="bi bi-people fa-fw me-2"></i>
                Students
              </Link>
              <Link href="/instructor-order" className="list-group-item">
                <i className="bi bi-folder-check fa-fw me-2"></i>
                Orders
              </Link>
              <Link href="/instructor-review" className="list-group-item">
                <i className="bi bi-star fa-fw me-2"></i>
                Reviews
              </Link>
              <Link href="/instructor-edit-profile" className="list-group-item">
                <i className="bi bi-pencil-square fa-fw me-2"></i>
                Edit Profile
              </Link>
              <Link href="/instructor-payout" className="list-group-item">
                <i className="bi bi-wallet2 fa-fw me-2"></i>
                Payouts
              </Link>
              <Link href="/instructor-setting" className="list-group-item">
                <i className="bi bi-gear fa-fw me-2"></i>
                Settings
              </Link>
              <Link
                href="/instructor-delete-account"
                className="list-group-item"
              >
                <i className="bi bi-trash fa-fw me-2"></i>
                Delete Profile
              </Link>
              <Link
                href="/sign-in"
                className="list-group-item text-danger bg-danger-soft-hover"
              >
                <i className="fas fa-sign-out-alt fa-fw me-2"></i>
                Sign Out
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Responsive offcanvas body END */}
    </div>
  );
};

export default OffcanvasSidebar;
