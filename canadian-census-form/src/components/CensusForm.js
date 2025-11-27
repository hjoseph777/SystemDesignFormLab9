import React, { useState } from 'react';

const CensusForm = ({ formData, onChange, onSubmit, errors }) => {
  const [isHelpVisible, setIsHelpVisible] = useState(false);

  return (
    <div className="form-container">
      <div className="form-header">
        <h1>Canadian Census Form</h1>
        <div className="reference-code-container">
          <div className="reference-code">Reference Code: SC-2025</div>
          <button 
            type="button"
            className="help-button"
            onMouseEnter={() => setIsHelpVisible(true)}
            aria-label="Show help information"
          >
            Help
          </button>
          {isHelpVisible && (
            <div className="help-window">
              <div className="help-window-header">
                <h3>Form Instructions</h3>
                <button 
                  type="button"
                  className="close-button"
                  onClick={() => setIsHelpVisible(false)}
                  aria-label="Close help window"
                >
                  ×
                </button>
              </div>
              <div className="help-window-content">
                <div className="help-item">
                  <strong>📮 Postal Code:</strong> Use Canadian format A1A 1A1
                </div>
                <div className="help-item">
                  <strong>✅ Accuracy:</strong> Ensure all information is legible and accurate
                </div>
                <div className="help-item">
                  <strong>🔒 Reference Code:</strong> Do not alter SC-2025 - it identifies the form type
                </div>
                <div className="help-item">
                  <strong>📞 Need Help?:</strong> Call Statistics Canada at 1-800-263-1136 or email statcan.info.infostats@canada.ca
                </div>
              </div>
            </div>
          )}
        </div>
        <p>This form is designed to collect essential demographic information for the Canadian census bureau. Please fill out all fields accurately.</p>
      </div>

      <form onSubmit={onSubmit} className="census-form">
        <div className="form-section">
          <h3>Identification Section</h3>
          
          <div className="form-group">
            <label htmlFor="respondentId">Respondent ID (For official use only)</label>
            <input
              type="text"
              id="respondentId"
              name="respondentId"
              value={formData.respondentId}
              onChange={onChange}
              placeholder="Auto-generated"
              readOnly
            />
          </div>

          <div className="form-group">
            <label htmlFor="submissionDate">Date of Submission</label>
            <input
              type="date"
              id="submissionDate"
              name="submissionDate"
              value={formData.submissionDate}
              readOnly
            />
          </div>
        </div>

        <div className="form-section">
          <h3>Personal Information</h3>
          
          <div className="form-group">
            <label htmlFor="fullName">Full Name *</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={onChange}
              required
            />
            {errors.fullName && <span className="error">{errors.fullName}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="occupation">Occupation *</label>
            <input
              type="text"
              id="occupation"
              name="occupation"
              value={formData.occupation}
              onChange={onChange}
              required
            />
            {errors.occupation && <span className="error">{errors.occupation}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="ageHead">Age of Head of Household *</label>
            <input
              type="number"
              id="ageHead"
              name="ageHead"
              value={formData.ageHead}
              onChange={onChange}
              min="18"
              max="120"
              required
            />
            {errors.ageHead && <span className="error">{errors.ageHead}</span>}
          </div>
        </div>

        <div className="form-section">
          <h3>Household Information</h3>
          
          <div className="form-group">
            <label htmlFor="address">Address *</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={onChange}
              required
            />
            {errors.address && <span className="error">{errors.address}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="city">City *</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={onChange}
              required
            />
            {errors.city && <span className="error">{errors.city}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="province">Province *</label>
            <select
              id="province"
              name="province"
              value={formData.province}
              onChange={onChange}
              required
            >
              <option value="">Select Province</option>
              <option value="Alberta">Alberta</option>
              <option value="British Columbia">British Columbia</option>
              <option value="Manitoba">Manitoba</option>
              <option value="New Brunswick">New Brunswick</option>
              <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
              <option value="Northwest Territories">Northwest Territories</option>
              <option value="Nova Scotia">Nova Scotia</option>
              <option value="Nunavut">Nunavut</option>
              <option value="Ontario">Ontario</option>
              <option value="Prince Edward Island">Prince Edward Island</option>
              <option value="Quebec">Quebec</option>
              <option value="Saskatchewan">Saskatchewan</option>
              <option value="Yukon">Yukon</option>
            </select>
            {errors.province && <span className="error">{errors.province}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              name="country"
              value="Canada"
              readOnly
            />
          </div>

          <div className="form-group">
            <label htmlFor="postalCode">Postal Code *</label>
            <div className="input-with-help">
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                value={formData.postalCode}
                onChange={onChange}
                placeholder="A1A 1A1"
                required
              />
              <div className="field-help">
                <span className="help-icon">ℹ️</span>
                <span className="help-text">Canadian format: Letter-Number-Letter Space Number-Letter-Number</span>
              </div>
            </div>
            {errors.postalCode && <span className="error">{errors.postalCode}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="householdCount">Number of People in Household *</label>
            <input
              type="number"
              id="householdCount"
              name="householdCount"
              value={formData.householdCount}
              onChange={onChange}
              min="1"
              max="20"
              required
            />
            {errors.householdCount && <span className="error">{errors.householdCount}</span>}
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-button">
            Review Information
          </button>
        </div>

        <div className="contact-info">
          <p><strong>Need assistance?</strong> Contact Statistics Canada at <strong>1-800-263-1136</strong> or email <strong>statcan.info.infostats@canada.ca</strong></p>
        </div>
      </form>
    </div>
  );
};

export default CensusForm;