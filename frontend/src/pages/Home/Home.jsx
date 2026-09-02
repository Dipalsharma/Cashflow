import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y / rect.height - 0.5) * -6;
    const rotateY = (x / rect.width - 0.5) * 6;

    card.style.transform = `
      perspective(1200px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-6px)
    `;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "";
    setIsHovered(false);
  };

  return (
    <main className="home">
      {/* HERO */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Personal finance, simplified
          </div>

          <h1>
            Take control of
            <span> your money.</span>
          </h1>

          <p className="hero-description">
            CashFlow helps you track income, manage expenses and understand
            your financial progress — all from one simple dashboard.
          </p>

          <div className="hero-actions">
            <Link to="/transactions" className="primary-btn">
              View Transactions
              <span>↗</span>
            </Link>

            <Link to="/about" className="secondary-btn">
              Explore CashFlow
            </Link>
          </div>

          <div className="hero-proof">
            <div className="proof-avatars">
              <span>₹</span>
              <span>+</span>
              <span>✓</span>
            </div>

            <div>
              <strong>Simple. Clear. Powerful.</strong>
              <small>Everything you need to manage your money.</small>
            </div>
          </div>
        </div>

        {/* DASHBOARD PREVIEW */}
        <div className="hero-visual">
          <div
            className={`dashboard-card ${isHovered ? "active" : ""}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="dashboard-top">
              <div>
                <span className="small-label">TOTAL BALANCE</span>
                <h2>₹75,000</h2>
              </div>

              <div className="balance-icon">↗</div>
            </div>

            <div className="balance-growth">
              <span>↑ 12.8%</span>
              <p>from last month</p>
            </div>

            <div className="mini-chart">
              <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                <path
                  d="M0 125 C60 115, 70 95, 115 105 C155 115, 165 75, 205 82 C245 90, 255 45, 300 65 C345 85, 355 25, 395 45 C435 65, 450 20, 500 28"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="dashboard-stats">
              <div>
                <span>Income</span>
                <strong>₹75,000</strong>
              </div>

              <div>
                <span>Expenses</span>
                <strong>₹0</strong>
              </div>
            </div>

            <div className="dashboard-footer">
              <span>Financial overview</span>
              <span className="footer-arrow">→</span>
            </div>
          </div>

          <div className="floating-card income-float">
            <span className="float-icon">↑</span>
            <div>
              <small>Income</small>
              <strong>₹75,000</strong>
            </div>
          </div>

          <div className="floating-card savings-float">
            <span className="float-icon">✓</span>
            <div>
              <small>Savings goal</small>
              <strong>68%</strong>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="overview-section">
        <div className="section-heading">
          <div>
            <span className="section-kicker">YOUR FINANCES</span>
            <h2>Everything at a glance.</h2>
          </div>

          <p>
            A clean overview that makes your financial picture easier to
            understand.
          </p>
        </div>

        <div className="overview-grid">
          <div className="overview-card balance-card">
            <div className="card-heading">
              <span>Current Balance</span>
              <div className="card-icon">₹</div>
            </div>

            <strong>₹75,000</strong>
            <p className="positive">↑ Your finances are looking healthy</p>

            <div className="card-line"></div>
          </div>

          <div className="overview-card">
            <div className="card-heading">
              <span>Total Income</span>
              <div className="card-icon">↗</div>
            </div>

            <strong>₹75,000</strong>
            <p>Money coming in</p>
          </div>

          <div className="overview-card">
            <div className="card-heading">
              <span>Total Expenses</span>
              <div className="card-icon">↘</div>
            </div>

            <strong>₹0</strong>
            <p>No expenses recorded</p>
          </div>
        </div>
      </section>

      {/* ACTIVITY */}
      <section className="activity-section">
        <div className="chart-panel">
          <div className="panel-header">
            <div>
              <span className="section-kicker">OVERVIEW</span>
              <h3>Money movement</h3>
            </div>

            <button>Last 30 days ▾</button>
          </div>

          <div className="large-chart">
            <div className="chart-y-axis">
              <span>₹80k</span>
              <span>₹60k</span>
              <span>₹40k</span>
              <span>₹20k</span>
              <span>₹0</span>
            </div>

            <div className="chart-area">
              <div className="chart-grid-line"></div>
              <div className="chart-grid-line"></div>
              <div className="chart-grid-line"></div>
              <div className="chart-grid-line"></div>
              <div className="chart-grid-line"></div>

              <svg viewBox="0 0 700 250" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="areaFill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopOpacity="0.25" />
                    <stop offset="100%" stopOpacity="0" />
                  </linearGradient>
                </defs>

                <path
                  d="M0 220 C80 215, 90 190, 150 195 C210 200, 230 150, 285 160 C340 170, 370 110, 425 130 C480 150, 510 80, 555 100 C610 125, 640 55, 700 65 L700 250 L0 250 Z"
                  fill="url(#areaFill)"
                />

                <path
                  d="M0 220 C80 215, 90 190, 150 195 C210 200, 230 150, 285 160 C340 170, 370 110, 425 130 C480 150, 510 80, 555 100 C610 125, 640 55, 700 65"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>

              <div className="chart-months">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
              </div>
            </div>
          </div>
        </div>

        <div className="activity-panel">
          <div className="panel-header">
            <div>
              <span className="section-kicker">RECENT</span>
              <h3>Activity</h3>
            </div>

            <Link to="/transactions">View all →</Link>
          </div>

          <div className="activity-item">
            <div className="activity-icon income">↑</div>
            <div className="activity-info">
              <strong>Freelance Payment</strong>
              <span>Income · Today</span>
            </div>
            <strong className="activity-amount">+₹25,000</strong>
          </div>

          <div className="activity-item">
            <div className="activity-icon income">↑</div>
            <div className="activity-info">
              <strong>Monthly Salary</strong>
              <span>Income · This month</span>
            </div>
            <strong className="activity-amount">+₹50,000</strong>
          </div>

          <div className="empty-activity">
            <span>✓</span>
            <p>You're all caught up</p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features-section">
        <div className="section-heading centered">
          <span className="section-kicker">WHY CASHFLOW</span>
          <h2>Built around your financial life.</h2>
          <p>
            Less complexity. More clarity. A better way to understand where
            your money goes.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-number">01</div>
            <div className="feature-icon">↗</div>
            <h3>Track everything</h3>
            <p>
              Keep income and expenses organized in one simple transaction
              system.
            </p>
            <Link to="/transactions">Manage transactions →</Link>
          </div>

          <div className="feature-card featured">
            <div className="feature-number">02</div>
            <div className="feature-icon">◫</div>
            <h3>See the bigger picture</h3>
            <p>
              Understand your balance and financial activity without
              complicated spreadsheets.
            </p>
            <Link to="/about">Learn more →</Link>
          </div>

          <div className="feature-card">
            <div className="feature-number">03</div>
            <div className="feature-icon">✓</div>
            <h3>Stay in control</h3>
            <p>
              Set financial goals and keep your money decisions clear and
              intentional.
            </p>
            <Link to="/profile">View profile →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="home-cta">
        <div>
          <span className="section-kicker">READY WHEN YOU ARE</span>
          <h2>Your money deserves a clearer view.</h2>
          <p>Start managing your finances with CashFlow.</p>
        </div>

        <Link to="/transactions" className="cta-button">
          Open Dashboard <span>↗</span>
        </Link>
      </section>
    </main>
  );
};

export default Home;