import { FC, Fragment } from 'react';
import Link from 'next/link';

import { Logo } from '@core/uikit';
import { AppRoutePath } from '@app/common';

export const Header: FC = () => {
  return (
    <Fragment>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            <div className="navbar-brand-box">
              <Link href={AppRoutePath.Index}>
                <Logo />
              </Link>
            </div>

            <button
              type="button"
              className="btn btn-sm px-3 font-size-16 d-lg-none header-item waves-effect waves-light"
              data-bs-toggle="collapse"
              data-bs-target="#topnav-menu-content"
            >
              <i className="fa fa-fw fa-bars"></i>
            </button>

            <form className="app-search d-none d-lg-block">
              <div className="position-relative">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                />
                <button className="btn btn-primary" type="button">
                  <i className="bx bx-search-alt align-middle"></i>
                </button>
              </div>
            </form>
          </div>

          <div className="d-flex">
            <div className="dropdown d-inline-block d-lg-none ms-2">
              <button
                type="button"
                className="btn header-item"
                id="page-header-search-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i data-feather="search" className="icon-lg"></i>
              </button>
              <div
                className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                aria-labelledby="page-header-search-dropdown"
              >
                <form className="p-3">
                  <div className="form-group m-0">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search ..."
                        aria-label="Search Result"
                      />

                      <button className="btn btn-primary" type="submit">
                        <i className="mdi mdi-magnify"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="dropdown d-none d-sm-inline-block">
              <button
                type="button"
                className="btn header-item"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  id="header-lang-img"
                  src="assets/images/flags/us.jpg"
                  alt="Header Language"
                  height="16"
                />
              </button>
              <div className="dropdown-menu dropdown-menu-end">
                <a
                  href="javascript:void(0);"
                  className="dropdown-item notify-item language"
                  data-lang="en"
                >
                  <img
                    src="assets/images/flags/us.jpg"
                    alt="user-image"
                    className="me-1"
                    height="12"
                  />{' '}
                  <span className="align-middle">English</span>
                </a>

                <a
                  href="javascript:void(0);"
                  className="dropdown-item notify-item language"
                  data-lang="sp"
                >
                  <img
                    src="assets/images/flags/spain.jpg"
                    alt="user-image"
                    className="me-1"
                    height="12"
                  />{' '}
                  <span className="align-middle">Spanish</span>
                </a>

                <a
                  href="javascript:void(0);"
                  className="dropdown-item notify-item language"
                  data-lang="gr"
                >
                  <img
                    src="assets/images/flags/germany.jpg"
                    alt="user-image"
                    className="me-1"
                    height="12"
                  />{' '}
                  <span className="align-middle">German</span>
                </a>

                <a
                  href="javascript:void(0);"
                  className="dropdown-item notify-item language"
                  data-lang="it"
                >
                  <img
                    src="assets/images/flags/italy.jpg"
                    alt="user-image"
                    className="me-1"
                    height="12"
                  />{' '}
                  <span className="align-middle">Italian</span>
                </a>

                <a
                  href="javascript:void(0);"
                  className="dropdown-item notify-item language"
                  data-lang="ru"
                >
                  <img
                    src="assets/images/flags/russia.jpg"
                    alt="user-image"
                    className="me-1"
                    height="12"
                  />{' '}
                  <span className="align-middle">Russian</span>
                </a>
              </div>
            </div>

            <div className="dropdown d-none d-sm-inline-block">
              <button
                type="button"
                className="btn header-item"
                id="mode-setting-btn"
              >
                <i data-feather="moon" className="icon-lg layout-mode-dark"></i>
                <i data-feather="sun" className="icon-lg layout-mode-light"></i>
              </button>
            </div>

            <div className="dropdown d-none d-lg-inline-block ms-1">
              <button
                type="button"
                className="btn header-item"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i data-feather="grid" className="icon-lg"></i>
              </button>
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                <div className="p-2">
                  <div className="row g-0">
                    <div className="col">
                      <a className="dropdown-icon-item" href="#">
                        <img
                          src="assets/images/brands/github.png"
                          alt="Github"
                        />
                        <span>GitHub</span>
                      </a>
                    </div>
                    <div className="col">
                      <a className="dropdown-icon-item" href="#">
                        <img
                          src="assets/images/brands/bitbucket.png"
                          alt="bitbucket"
                        />
                        <span>Bitbucket</span>
                      </a>
                    </div>
                    <div className="col">
                      <a className="dropdown-icon-item" href="#">
                        <img
                          src="assets/images/brands/dribbble.png"
                          alt="dribbble"
                        />
                        <span>Dribbble</span>
                      </a>
                    </div>
                  </div>

                  <div className="row g-0">
                    <div className="col">
                      <a className="dropdown-icon-item" href="#">
                        <img
                          src="assets/images/brands/dropbox.png"
                          alt="dropbox"
                        />
                        <span>Dropbox</span>
                      </a>
                    </div>
                    <div className="col">
                      <a className="dropdown-icon-item" href="#">
                        <img
                          src="assets/images/brands/mail_chimp.png"
                          alt="mail_chimp"
                        />
                        <span>Mail Chimp</span>
                      </a>
                    </div>
                    <div className="col">
                      <a className="dropdown-icon-item" href="#">
                        <img src="assets/images/brands/slack.png" alt="slack" />
                        <span>Slack</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="dropdown d-inline-block">
              <button
                type="button"
                className="btn header-item noti-icon position-relative"
                id="page-header-notifications-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i data-feather="bell" className="icon-lg"></i>
                <span className="badge bg-danger rounded-pill">5</span>
              </button>
              <div
                className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                aria-labelledby="page-header-notifications-dropdown"
              >
                <div className="p-3">
                  <div className="row align-items-center">
                    <div className="col">
                      <h6 className="m-0"> Notifications </h6>
                    </div>
                    <div className="col-auto">
                      <a
                        href="#!"
                        className="small text-reset text-decoration-underline"
                      >
                        {' '}
                        Unread (3)
                      </a>
                    </div>
                  </div>
                </div>
                <div data-simplebar style={{ maxHeight: 230 }}>
                  <a href="#!" className="text-reset notification-item">
                    <div className="d-flex">
                      <img
                        src="assets/images/users/avatar-3.jpg"
                        className="me-3 rounded-circle avatar-sm"
                        alt="user-pic"
                      />
                      <div className="flex-grow-1">
                        <h6 className="mb-1">James Lemire</h6>
                        <div className="font-size-13 text-muted">
                          <p className="mb-1">
                            It will seem like simplified English.
                          </p>
                          <p className="mb-0">
                            <i className="mdi mdi-clock-outline"></i>{' '}
                            <span>1 hour ago</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="#!" className="text-reset notification-item">
                    <div className="d-flex">
                      <div className="avatar-sm me-3">
                        <span className="avatar-title bg-primary rounded-circle font-size-16">
                          <i className="bx bx-cart"></i>
                        </span>
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="mb-1">Your order is placed</h6>
                        <div className="font-size-13 text-muted">
                          <p className="mb-1">
                            If several languages coalesce the grammar
                          </p>
                          <p className="mb-0">
                            <i className="mdi mdi-clock-outline"></i>{' '}
                            <span>3 min ago</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="#!" className="text-reset notification-item">
                    <div className="d-flex">
                      <div className="avatar-sm me-3">
                        <span className="avatar-title bg-success rounded-circle font-size-16">
                          <i className="bx bx-badge-check"></i>
                        </span>
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="mb-1">Your item is shipped</h6>
                        <div className="font-size-13 text-muted">
                          <p className="mb-1">
                            If several languages coalesce the grammar
                          </p>
                          <p className="mb-0">
                            <i className="mdi mdi-clock-outline"></i>{' '}
                            <span>3 min ago</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>

                  <a href="#!" className="text-reset notification-item">
                    <div className="d-flex">
                      <img
                        src="assets/images/users/avatar-6.jpg"
                        className="me-3 rounded-circle avatar-sm"
                        alt="user-pic"
                      />
                      <div className="flex-grow-1">
                        <h6 className="mb-1">Salena Layfield</h6>
                        <div className="font-size-13 text-muted">
                          <p className="mb-1">
                            As a skeptical Cambridge friend of mine occidental.
                          </p>
                          <p className="mb-0">
                            <i className="mdi mdi-clock-outline"></i>{' '}
                            <span>1 hours ago</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="p-2 border-top d-grid">
                  <a
                    className="btn btn-sm btn-link font-size-14 text-center"
                    href="javascript:void(0)"
                  >
                    <i className="mdi mdi-arrow-right-circle me-1"></i>{' '}
                    <span>View More..</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="dropdown d-inline-block">
              <button
                type="button"
                className="btn header-item right-bar-toggle me-2"
              >
                <i data-feather="settings" className="icon-lg"></i>
              </button>
            </div>

            <div className="dropdown d-inline-block">
              <button
                type="button"
                className="btn header-item bg-light-subtle border-start border-end"
                id="page-header-user-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  className="rounded-circle header-profile-user"
                  src="assets/images/users/avatar-1.jpg"
                  alt="Header Avatar"
                />
                <span className="d-none d-xl-inline-block ms-1 fw-medium">
                  Shawn L.
                </span>
                <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
              </button>
              <div className="dropdown-menu dropdown-menu-end">
                <a className="dropdown-item" href="apps-contacts-profile.html">
                  <i className="mdi mdi mdi-face-man font-size-16 align-middle me-1"></i>{' '}
                  Profile
                </a>
                <a className="dropdown-item" href="auth-lock-screen.html">
                  <i className="mdi mdi-lock font-size-16 align-middle me-1"></i>{' '}
                  Lock screen
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="auth-logout.html">
                  <i className="mdi mdi-logout font-size-16 align-middle me-1"></i>{' '}
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* <div className="topnav">
        <div className="container-fluid">
          <nav className="navbar navbar-light navbar-expand-lg topnav-menu">
            <div className="collapse navbar-collapse" id="topnav-menu-content">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle arrow-none"
                    href="index.html"
                    id="topnav-dashboard"
                    role="button"
                  >
                    <i data-feather="home"></i>
                    <span data-key="t-dashboards">Dashboard</span>
                  </a>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle arrow-none"
                    href="#"
                    id="topnav-uielement"
                    role="button"
                  >
                    <i data-feather="briefcase"></i>
                    <span data-key="t-elements">Elements</span>
                    <div className="arrow-down"></div>
                  </a>

                  <div
                    className="dropdown-menu mega-dropdown-menu px-2 dropdown-mega-menu-xl"
                    aria-labelledby="topnav-uielement"
                  >
                    <div className="ps-2 p-lg-0">
                      <div className="row">
                        <div className="col-lg-8">
                          <div>
                            <div className="menu-title">Elements</div>
                            <div className="row g-0">
                              <div className="col-lg-5">
                                <div>
                                  <a
                                    href="ui-alerts.html"
                                    className="dropdown-item"
                                    data-key="t-alerts"
                                  >
                                    Alerts
                                  </a>
                                  <a
                                    href="ui-buttons.html"
                                    className="dropdown-item"
                                    data-key="t-buttons"
                                  >
                                    Buttons
                                  </a>
                                  <a
                                    href="ui-cards.html"
                                    className="dropdown-item"
                                    data-key="t-cards"
                                  >
                                    Cards
                                  </a>
                                  <a
                                    href="ui-carousel.html"
                                    className="dropdown-item"
                                    data-key="t-carousel"
                                  >
                                    Carousel
                                  </a>
                                  <a
                                    href="ui-dropdowns.html"
                                    className="dropdown-item"
                                    data-key="t-dropdowns"
                                  >
                                    Dropdowns
                                  </a>
                                  <a
                                    href="ui-grid.html"
                                    className="dropdown-item"
                                    data-key="t-grid"
                                  >
                                    Grid
                                  </a>
                                  <a
                                    href="ui-images.html"
                                    className="dropdown-item"
                                    data-key="t-images"
                                  >
                                    Images
                                  </a>
                                  <a
                                    href="ui-modals.html"
                                    className="dropdown-item"
                                    data-key="t-modals"
                                  >
                                    Modals
                                  </a>
                                  <a
                                    href="ui-offcanvas.html"
                                    className="dropdown-item"
                                    data-key="t-offcanvas"
                                  >
                                    Offcanvas
                                  </a>
                                </div>
                              </div>
                              <div className="col-lg-5">
                                <div>
                                  <a
                                    href="ui-progressbars.html"
                                    className="dropdown-item"
                                    data-key="t-progress-bars"
                                  >
                                    Progress Bars
                                  </a>
                                  <a
                                    href="ui-placeholders.html"
                                    className="dropdown-item"
                                    data-key="t-progress-bars"
                                  >
                                    Placeholders
                                  </a>
                                  <a
                                    href="ui-tabs-accordions.html"
                                    className="dropdown-item"
                                    data-key="t-tabs-accordions"
                                  >
                                    Tabs & Accordions
                                  </a>
                                  <a
                                    href="ui-typography.html"
                                    className="dropdown-item"
                                    data-key="t-typography"
                                  >
                                    Typography
                                  </a>
                                  <a
                                    href="ui-toasts.html"
                                    className="dropdown-item"
                                    data-key="t-toasts"
                                  >
                                    Toasts
                                  </a>
                                  <a
                                    href="ui-video.html"
                                    className="dropdown-item"
                                    data-key="t-video"
                                  >
                                    Video
                                  </a>
                                  <a
                                    href="ui-general.html"
                                    className="dropdown-item"
                                    data-key="t-general"
                                  >
                                    General
                                  </a>
                                  <a
                                    href="ui-colors.html"
                                    className="dropdown-item"
                                    data-key="t-colors"
                                  >
                                    Colors
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-4">
                          <div>
                            <div className="menu-title">Extended</div>
                            <div>
                              <a
                                href="extended-lightbox.html"
                                className="dropdown-item"
                                data-key="t-lightbox"
                              >
                                Lightbox
                              </a>
                              <a
                                href="extended-rangeslider.html"
                                className="dropdown-item"
                                data-key="t-range-slider"
                              >
                                Range Slider
                              </a>
                              <a
                                href="extended-sweet-alert.html"
                                className="dropdown-item"
                                data-key="t-sweet-alert"
                              >
                                SweetAlert 2
                              </a>
                              <a
                                href="extended-session-timeout.html"
                                className="dropdown-item"
                                data-key="t-session-timeout"
                              >
                                Session Timeout
                              </a>
                              <a
                                href="extended-rating.html"
                                className="dropdown-item"
                                data-key="t-rating"
                              >
                                Rating
                              </a>
                              <a
                                href="extended-notifications.html"
                                className="dropdown-item"
                                data-key="t-notifications"
                              >
                                Notifications
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle arrow-none"
                    href="#"
                    id="topnav-pages"
                    role="button"
                  >
                    <i data-feather="grid"></i>
                    <span data-key="t-apps">Apps</span>{' '}
                    <div className="arrow-down"></div>
                  </a>
                  <div className="dropdown-menu" aria-labelledby="topnav-pages">
                    <a
                      href="apps-calendar.html"
                      className="dropdown-item"
                      data-key="t-calendar"
                    >
                      Calendar
                    </a>
                    <a
                      href="apps-chat.html"
                      className="dropdown-item"
                      data-key="t-chat"
                    >
                      Chat
                    </a>

                    <div className="dropdown">
                      <a
                        className="dropdown-item dropdown-toggle arrow-none"
                        href="#"
                        id="topnav-email"
                        role="button"
                      >
                        <span data-key="t-email">Email</span>{' '}
                        <div className="arrow-down"></div>
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="topnav-email"
                      >
                        <a
                          href="apps-email-inbox.html"
                          className="dropdown-item"
                          data-key="t-inbox"
                        >
                          Inbox
                        </a>
                        <a
                          href="apps-email-read.html"
                          className="dropdown-item"
                          data-key="t-read-email"
                        >
                          Read Email
                        </a>
                      </div>
                    </div>

                    <div className="dropdown">
                      <a
                        className="dropdown-item dropdown-toggle arrow-none"
                        href="#"
                        id="topnav-invoice"
                        role="button"
                      >
                        <span data-key="t-invoices">Invoices</span>{' '}
                        <div className="arrow-down"></div>
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="topnav-invoice"
                      >
                        <a
                          href="apps-invoices-list.html"
                          className="dropdown-item"
                          data-key="t-invoice-list"
                        >
                          Invoice List
                        </a>
                        <a
                          href="apps-invoices-detail.html"
                          className="dropdown-item"
                          data-key="t-invoice-detail"
                        >
                          Invoice Detail
                        </a>
                      </div>
                    </div>
                    <div className="dropdown">
                      <a
                        className="dropdown-item dropdown-toggle arrow-none"
                        href="#"
                        id="topnav-contact"
                        role="button"
                      >
                        <span data-key="t-contacts">Contacts</span>{' '}
                        <div className="arrow-down"></div>
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="topnav-contact"
                      >
                        <a
                          href="apps-contacts-grid.html"
                          className="dropdown-item"
                          data-key="t-user-grid"
                        >
                          User Grid
                        </a>
                        <a
                          href="apps-contacts-list.html"
                          className="dropdown-item"
                          data-key="t-user-list"
                        >
                          User List
                        </a>
                        <a
                          href="apps-contacts-profile.html"
                          className="dropdown-item"
                          data-key="t-profile"
                        >
                          Profile
                        </a>
                      </div>
                    </div>
                    <div className="dropdown">
                      <a
                        className="dropdown-item dropdown-toggle d-flex justify-content-between align-items-center"
                        href="#"
                        id="topnav-contact"
                        role="button"
                      >
                        <span data-key="t-contacts" className="">
                          Blog
                        </span>
                        <span className="badge bg-danger-subtle text-danger">
                          New
                        </span>
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="topnav-contact"
                      >
                        <a
                          href="apps-blog-grid.html"
                          className="dropdown-item"
                          data-key="t-blog-grid"
                        >
                          Blog Grid
                        </a>
                        <a
                          href="apps-blog-list.html"
                          className="dropdown-item"
                          data-key="t-blog-list"
                        >
                          Blog List
                        </a>
                        <a
                          href="apps-blog-detail.html"
                          className="dropdown-item"
                          data-key="t-blog-details"
                        >
                          Blog Details
                        </a>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle arrow-none"
                    href="#"
                    id="topnav-components"
                    role="button"
                  >
                    <i data-feather="box"></i>
                    <span data-key="t-components">Components</span>{' '}
                    <div className="arrow-down"></div>
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="topnav-components"
                  >
                    <div className="dropdown">
                      <a
                        className="dropdown-item dropdown-toggle arrow-none"
                        href="#"
                        id="topnav-form"
                        role="button"
                      >
                        <span data-key="t-forms">Forms</span>{' '}
                        <div className="arrow-down"></div>
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="topnav-form"
                      >
                        <a
                          href="form-elements.html"
                          className="dropdown-item"
                          data-key="t-form-elements"
                        >
                          Basic Elements
                        </a>
                        <a
                          href="form-validation.html"
                          className="dropdown-item"
                          data-key="t-form-validation"
                        >
                          Validation
                        </a>
                        <a
                          href="form-advanced.html"
                          className="dropdown-item"
                          data-key="t-form-advanced"
                        >
                          Advanced Plugins
                        </a>
                        <a
                          href="form-editors.html"
                          className="dropdown-item"
                          data-key="t-form-editors"
                        >
                          Editors
                        </a>
                        <a
                          href="form-uploads.html"
                          className="dropdown-item"
                          data-key="t-form-upload"
                        >
                          File Upload
                        </a>
                        <a
                          href="form-wizard.html"
                          className="dropdown-item"
                          data-key="t-form-wizard"
                        >
                          Wizard
                        </a>
                        <a
                          href="form-mask.html"
                          className="dropdown-item"
                          data-key="t-form-mask"
                        >
                          Mask
                        </a>
                      </div>
                    </div>
                    <div className="dropdown">
                      <a
                        className="dropdown-item dropdown-toggle arrow-none"
                        href="#"
                        id="topnav-table"
                        role="button"
                      >
                        <span data-key="t-tables">Tables</span>{' '}
                        <div className="arrow-down"></div>
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="topnav-table"
                      >
                        <a
                          href="tables-basic.html"
                          className="dropdown-item"
                          data-key="t-basic-tables"
                        >
                          Bootstrap Basic
                        </a>
                        <a
                          href="tables-datatable.html"
                          className="dropdown-item"
                          data-key="t-data-tables"
                        >
                          Data Tables
                        </a>
                        <a
                          href="tables-responsive.html"
                          className="dropdown-item"
                          data-key="t-responsive-table"
                        >
                          Responsive
                        </a>
                        <a
                          href="tables-editable.html"
                          className="dropdown-item"
                          data-key="t-editable-table"
                        >
                          Editable
                        </a>
                      </div>
                    </div>
                    <div className="dropdown">
                      <a
                        className="dropdown-item dropdown-toggle arrow-none"
                        href="#"
                        id="topnav-charts"
                        role="button"
                      >
                        <span data-key="t-charts">Charts</span>{' '}
                        <div className="arrow-down"></div>
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="topnav-charts"
                      >
                        <a
                          href="charts-apex.html"
                          className="dropdown-item"
                          data-key="t-apex-charts"
                        >
                          Apex charts
                        </a>
                        <a
                          href="charts-echart.html"
                          className="dropdown-item"
                          data-key="t-e-charts"
                        >
                          E charts
                        </a>
                        <a
                          href="charts-chartjs.html"
                          className="dropdown-item"
                          data-key="t-chartjs-charts"
                        >
                          Chartjs
                        </a>
                        <a
                          href="charts-knob.html"
                          className="dropdown-item"
                          data-key="t-knob-charts"
                        >
                          Jquery Knob
                        </a>
                        <a
                          href="charts-sparkline.html"
                          className="dropdown-item"
                          data-key="t-sparkline-charts"
                        >
                          Sparkline
                        </a>
                      </div>
                    </div>
                    <div className="dropdown">
                      <a
                        className="dropdown-item dropdown-toggle arrow-none"
                        href="#"
                        id="topnav-icons"
                        role="button"
                      >
                        <span data-key="t-icons">Icons</span>{' '}
                        <div className="arrow-down"></div>
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="topnav-icons"
                      >
                        <a
                          href="icons-boxicons.html"
                          className="dropdown-item"
                          data-key="t-boxicons"
                        >
                          Boxicons
                        </a>
                        <a
                          href="icons-materialdesign.html"
                          className="dropdown-item"
                          data-key="t-material-design"
                        >
                          Material Design
                        </a>
                        <a
                          href="icons-dripicons.html"
                          className="dropdown-item"
                          data-key="t-dripicons"
                        >
                          Dripicons
                        </a>
                        <a
                          href="icons-fontawesome.html"
                          className="dropdown-item"
                          data-key="t-font-awesome"
                        >
                          Font Awesome 5
                        </a>
                      </div>
                    </div>
                    <div className="dropdown">
                      <a
                        className="dropdown-item dropdown-toggle arrow-none"
                        href="#"
                        id="topnav-map"
                        role="button"
                      >
                        <span data-key="t-maps">Maps</span>{' '}
                        <div className="arrow-down"></div>
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="topnav-map"
                      >
                        <a
                          href="maps-google.html"
                          className="dropdown-item"
                          data-key="t-g-maps"
                        >
                          Google
                        </a>
                        <a
                          href="maps-vector.html"
                          className="dropdown-item"
                          data-key="t-v-maps"
                        >
                          Vector
                        </a>
                        <a
                          href="maps-leaflet.html"
                          className="dropdown-item"
                          data-key="t-l-maps"
                        >
                          Leaflet
                        </a>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle arrow-none"
                    href="#"
                    id="topnav-more"
                    role="button"
                  >
                    <i data-feather="file-text"></i>
                    <span data-key="t-extra-pages">Extra Pages</span>{' '}
                    <div className="arrow-down"></div>
                  </a>
                  <div className="dropdown-menu" aria-labelledby="topnav-more">
                    <div className="dropdown">
                      <a
                        className="dropdown-item dropdown-toggle arrow-none"
                        href="#"
                        id="topnav-auth"
                        role="button"
                      >
                        <span data-key="t-authentication">Authentication</span>{' '}
                        <div className="arrow-down"></div>
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="topnav-auth"
                      >
                        <a
                          href="auth-login.html"
                          className="dropdown-item"
                          data-key="t-login"
                        >
                          Login
                        </a>
                        <a
                          href="auth-register.html"
                          className="dropdown-item"
                          data-key="t-register"
                        >
                          Register
                        </a>
                        <a
                          href="auth-recoverpw.html"
                          className="dropdown-item"
                          data-key="t-recover-password"
                        >
                          Recover Password
                        </a>
                        <a
                          href="auth-lock-screen.html"
                          className="dropdown-item"
                          data-key="t-lock-screen"
                        >
                          Lock Screen
                        </a>
                        <a
                          href="auth-logout.html"
                          className="dropdown-item"
                          data-key="t-logout"
                        >
                          Log Out
                        </a>
                        <a
                          href="auth-confirm-mail.html"
                          className="dropdown-item"
                          data-key="t-confirm-mail"
                        >
                          Confirm Mail
                        </a>
                        <a
                          href="auth-email-verification.html"
                          className="dropdown-item"
                          data-key="t-email-verification"
                        >
                          Email verification
                        </a>
                        <a
                          href="auth-two-step-verification.html"
                          className="dropdown-item"
                          data-key="t-two-step-verification"
                        >
                          Two step verification
                        </a>
                      </div>
                    </div>
                    <div className="dropdown">
                      <a
                        className="dropdown-item dropdown-toggle arrow-none"
                        href="#"
                        id="topnav-utility"
                        role="button"
                      >
                        <span data-key="t-utility">Utility</span>{' '}
                        <div className="arrow-down"></div>
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="topnav-utility"
                      >
                        <a
                          href="pages-starter.html"
                          className="dropdown-item"
                          data-key="t-starter-page"
                        >
                          Starter Page
                        </a>
                        <a
                          href="pages-maintenance.html"
                          className="dropdown-item"
                          data-key="t-maintenance"
                        >
                          Maintenance
                        </a>
                        <a
                          href="pages-comingsoon.html"
                          className="dropdown-item"
                          data-key="t-coming-soon"
                        >
                          Coming Soon
                        </a>
                        <a
                          href="pages-timeline.html"
                          className="dropdown-item"
                          data-key="t-timeline"
                        >
                          Timeline
                        </a>
                        <a
                          href="pages-faqs.html"
                          className="dropdown-item"
                          data-key="t-faqs"
                        >
                          FAQs
                        </a>
                        <a
                          href="pages-pricing.html"
                          className="dropdown-item"
                          data-key="t-pricing"
                        >
                          Pricing
                        </a>
                        <a
                          href="pages-404.html"
                          className="dropdown-item"
                          data-key="t-error-404"
                        >
                          Error 404
                        </a>
                        <a
                          href="pages-500.html"
                          className="dropdown-item"
                          data-key="t-error-500"
                        >
                          Error 500
                        </a>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle arrow-none"
                    href="layouts-horizontal.html"
                    role="button"
                  >
                    <i data-feather="layout"></i>
                    <span data-key="t-horizontal">Horizontal</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div> */}
    </Fragment>
  );
};
