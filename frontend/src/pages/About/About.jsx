import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <main className="about-page">
      <div className="about-container">

        {/* HERO */}
        <section className="about-hero">
          <div className="about-hero-content">
            <p className="about-eyebrow">ABOUT CASHFLOW</p>

            <h1>
              Smart finance
              <br />
              management,
              <br />
              made simple.
            </h1>

            <p className="about-subtitle">
              CashFlow is a personal finance dashboard designed to make
              tracking income, expenses, and financial goals simple.
            </p>

            <div className="about-actions">
              <Link to="/transactions" className="about-primary-btn">
                Explore Transactions →
              </Link>

              <Link to="/profile" className="about-secondary-btn">
                My Profile
              </Link>
            </div>
          </div>

          <div className="about-visual">
            <div className="visual-card main-visual-card">
              <span>FINANCIAL OVERVIEW</span>

              <div className="visual-balance">
                <small>Current Balance</small>
                <strong>₹75,000</strong>
              </div>

              <div className="visual-bars">
                <div className="visual-bar">
                  <span>Income</span>
                  <div>
                    <i className="income-bar" />
                  </div>
                </div>

                <div className="visual-bar">
                  <span>Expenses</span>
                  <div>
                    <i className="expense-bar" />
                  </div>
                </div>

                <div className="visual-bar">
                  <span>Savings</span>
                  <div>
                    <i className="saving-bar" />
                  </div>
                </div>
              </div>
            </div>

            <div className="floating-card">
              <span>MONTHLY SAVINGS</span>
              <strong>₹20,000</strong>
              <small>+12.5% this month</small>
            </div>
          </div>
        </section>

        {/* PURPOSE */}
        <section className="about-purpose">
          <div className="section-label">
            <span>01</span>
            <p>OUR PURPOSE</p>
          </div>

          <div className="purpose-content">
            <h2>
              Better money habits
              <br />
              start with clarity.
            </h2>

            <div>
              <p>
                Managing personal finances does not need to be complicated.
                CashFlow brings your financial information together in one
                clean and easy-to-understand dashboard.
              </p>

              <p>
                From tracking daily transactions to setting savings goals,
                the platform helps you understand where your money goes and
                plan where it should go next.
              </p>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="values-section">
          <div className="section-label">
            <span>02</span>
            <p>WHAT WE FOCUS ON</p>
          </div>

          <div className="values-grid">

            <article className="value-card">
              <div className="value-number">01</div>

              <div className="value-icon">↗</div>

              <h3>Simple Tracking</h3>

              <p>
                Add and manage income or expenses without unnecessary
                complexity.
              </p>
            </article>

            <article className="value-card dark-value">
              <div className="value-number">02</div>

              <div className="value-icon">◎</div>

              <h3>Clear Insights</h3>

              <p>
                Understand your balance, income, expenses, and savings
                through a clean interface.
              </p>
            </article>

            <article className="value-card">
              <div className="value-number">03</div>

              <div className="value-icon">✓</div>

              <h3>Better Goals</h3>

              <p>
                Set financial targets and keep your progress visible every
                time you use CashFlow.
              </p>
            </article>

          </div>
        </section>

        {/* TECHNOLOGY */}
        <section className="technology-section">
          <div className="technology-card">

            <div className="technology-left">
              <p className="about-eyebrow">PROJECT JOURNEY</p>

              <h2>
                Built with modern
                <br />
                web technology.
              </h2>

              <p>
                CashFlow combines a responsive React frontend with a
                Node.js, Express, and MongoDB backend to create a complete
                full-stack finance application.
              </p>
            </div>

            <div className="technology-stack">

              <div className="tech-item">
                <span>01</span>
                <strong>React</strong>
                <small>Frontend UI</small>
              </div>

              <div className="tech-item">
                <span>02</span>
                <strong>Node.js</strong>
                <small>Runtime</small>
              </div>

              <div className="tech-item">
                <span>03</span>
                <strong>Express</strong>
                <small>REST API</small>
              </div>

              <div className="tech-item">
                <span>04</span>
                <strong>MongoDB</strong>
                <small>Database</small>
              </div>

            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="about-cta">
          <div>
            <p className="about-eyebrow">READY TO TAKE CONTROL?</p>

            <h2>
              Your money.
              <br />
              Your clarity.
            </h2>
          </div>

          <Link to="/transactions" className="cta-button">
            Start Managing →
          </Link>
        </section>

      </div>
    </main>
  );
};

export default About;