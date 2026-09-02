import React, { useEffect, useState } from "react";
import "./Profile.css";

const defaultProfile = {
  name: "Dipal Sharma",
  email: "dipal@example.com",
  occupation: "Student",
  monthlyIncome: "50000",
  savingsGoal: "20000",
  currency: "INR",
  photo: "",
};

const Profile = () => {
  const [profile, setProfile] = useState(defaultProfile);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const storedProfile = localStorage.getItem("cashflowProfile");

    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSaved(false);
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select an image file.");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      alert("Image size should be less than 2MB.");
      return;
    }

    const reader = new FileReader();

    reader.onloadend = () => {
      setProfile((prev) => ({
        ...prev,
        photo: reader.result,
      }));

      setSaved(false);
    };

    reader.readAsDataURL(file);
  };

  const removePhoto = () => {
    setProfile((prev) => ({
      ...prev,
      photo: "",
    }));

    setSaved(false);
  };

  const handleSave = (e) => {
    e.preventDefault();

    localStorage.setItem("cashflowProfile", JSON.stringify(profile));

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 3000);
  };

  const monthlyIncome = Number(profile.monthlyIncome) || 0;
  const savingsGoal = Number(profile.savingsGoal) || 0;

  const savingsPercentage =
    monthlyIncome > 0
      ? Math.min((savingsGoal / monthlyIncome) * 100, 100)
      : 0;

  const currencySymbol =
    profile.currency === "USD"
      ? "$"
      : profile.currency === "EUR"
      ? "€"
      : "₹";

  return (
    <main className="profile-page">
      <div className="profile-container">

        {/* HERO */}
        <section className="profile-hero">
          <div>
            <p className="profile-eyebrow">PERSONAL FINANCE</p>

            <h1>My Profile</h1>

            <p className="profile-subtitle">
              Manage your personal details and financial preferences.
            </p>
          </div>

          <div className="profile-hero-badge">
            <span>PROFILE</span>
            <strong>01</strong>
          </div>
        </section>

        {/* PROFILE HEADER CARD */}
        <section className="profile-card profile-intro-card">
          <div className="profile-avatar-area">

            <div className="profile-avatar">
              {profile.photo ? (
                <img src={profile.photo} alt="Profile" />
              ) : (
                <span>
                  {profile.name
                    ? profile.name.charAt(0).toUpperCase()
                    : "P"}
                </span>
              )}
            </div>

            <div className="profile-intro">
              <span className="small-label">WELCOME BACK</span>

              <h2>{profile.name || "Your Name"}</h2>

              <p>{profile.occupation || "Your occupation"}</p>
            </div>
          </div>

          <div className="photo-actions">
            <label htmlFor="profile-photo" className="upload-photo">
              Upload Photo
            </label>

            <input
              id="profile-photo"
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
            />

            {profile.photo && (
              <button
                type="button"
                className="remove-photo"
                onClick={removePhoto}
              >
                Remove
              </button>
            )}
          </div>
        </section>

        {/* FINANCIAL OVERVIEW */}
        <section className="profile-stats">

          <div className="profile-stat-card dark-stat">
            <span>MONTHLY INCOME</span>
            <strong>
              {currencySymbol}
              {monthlyIncome.toLocaleString()}
            </strong>
            <p>Your planned monthly income</p>
          </div>

          <div className="profile-stat-card">
            <span>SAVINGS GOAL</span>
            <strong className="green-value">
              {currencySymbol}
              {savingsGoal.toLocaleString()}
            </strong>
            <p>Target amount every month</p>
          </div>

          <div className="profile-stat-card">
            <span>SAVINGS RATE</span>
            <strong className="green-value">
              {Math.round(savingsPercentage)}%
            </strong>
            <p>Based on your monthly goal</p>
          </div>

        </section>

        {/* CONTENT GRID */}
        <div className="profile-content">

          {/* PERSONAL INFORMATION */}
          <section className="profile-card form-card">

            <div className="card-heading">
              <div>
                <span className="small-label">YOUR DETAILS</span>
                <h2>Personal Information</h2>
              </div>

              <div className="heading-number">01</div>
            </div>

            <form onSubmit={handleSave}>

              <div className="profile-form-grid">

                <div className="profile-field">
                  <label>Full Name</label>

                  <input
                    type="text"
                    name="name"
                    value={profile.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                  />
                </div>

                <div className="profile-field">
                  <label>Email Address</label>

                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                </div>

                <div className="profile-field">
                  <label>Occupation</label>

                  <input
                    type="text"
                    name="occupation"
                    value={profile.occupation}
                    onChange={handleChange}
                    placeholder="e.g. Student"
                  />
                </div>

                <div className="profile-field">
                  <label>Currency</label>

                  <select
                    name="currency"
                    value={profile.currency}
                    onChange={handleChange}
                  >
                    <option value="INR">INR — ₹</option>
                    <option value="USD">USD — $</option>
                    <option value="EUR">EUR — €</option>
                  </select>
                </div>

              </div>

              <div className="form-divider" />

              <div className="card-heading finance-heading">
                <div>
                  <span className="small-label">FINANCIAL PREFERENCES</span>
                  <h2>Money Goals</h2>
                </div>

                <div className="heading-number">02</div>
              </div>

              <div className="profile-form-grid">

                <div className="profile-field">
                  <label>Monthly Income</label>

                  <div className="input-with-symbol">
                    <span>{currencySymbol}</span>

                    <input
                      type="number"
                      name="monthlyIncome"
                      min="0"
                      value={profile.monthlyIncome}
                      onChange={handleChange}
                      placeholder="50000"
                    />
                  </div>
                </div>

                <div className="profile-field">
                  <label>Monthly Savings Goal</label>

                  <div className="input-with-symbol">
                    <span>{currencySymbol}</span>

                    <input
                      type="number"
                      name="savingsGoal"
                      min="0"
                      value={profile.savingsGoal}
                      onChange={handleChange}
                      placeholder="20000"
                    />
                  </div>
                </div>

              </div>

              {/* PROGRESS */}
              <div className="savings-progress">

                <div className="progress-header">
                  <span>Savings target</span>

                  <strong>
                    {Math.round(savingsPercentage)}%
                  </strong>
                </div>

                <div className="progress-track">
                  <div
                    className="progress-fill"
                    style={{
                      width: `${savingsPercentage}%`,
                    }}
                  />
                </div>

                <p>
                  Your goal is{" "}
                  <strong>
                    {currencySymbol}
                    {savingsGoal.toLocaleString()}
                  </strong>{" "}
                  from a monthly income of{" "}
                  <strong>
                    {currencySymbol}
                    {monthlyIncome.toLocaleString()}
                  </strong>
                  .
                </p>

              </div>

              <div className="save-area">

                {saved && (
                  <div className="save-success">
                    ✓ Profile saved successfully
                  </div>
                )}

                <button type="submit" className="save-profile">
                  Save Changes
                </button>

              </div>

            </form>
          </section>

          {/* SIDE INFORMATION */}
          <aside className="profile-side">

            <div className="profile-card insight-card">

              <span className="small-label">FINANCE INSIGHT</span>

              <div className="insight-icon">↗</div>

              <h2>
                Build your financial
                <br />
                routine.
              </h2>

              <p>
                Keep your income and savings goals updated to get a
                clearer picture of your financial progress.
              </p>

            </div>

            <div className="profile-card checklist-card">

              <span className="small-label">PROFILE CHECK</span>

              <h3>Your setup</h3>

              <div className="check-item">
                <span className="check-circle">✓</span>
                <span>Personal information</span>
              </div>

              <div className="check-item">
                <span className="check-circle">✓</span>
                <span>Financial preferences</span>
              </div>

              <div className="check-item">
                <span className="check-circle">✓</span>
                <span>Savings goal</span>
              </div>

            </div>

          </aside>

        </div>
      </div>
    </main>
  );
};

export default Profile;