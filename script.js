// Function to add a new company input field
function addCompany() {
    const companiesContainer = document.getElementById('companies-container');
    
    const companyDiv = document.createElement('div');
    companyDiv.classList.add('company-container');
    
    const companyNameInput = document.createElement('input');
    companyNameInput.setAttribute('type', 'text');
    companyNameInput.setAttribute('placeholder', 'Company Name');
    companyNameInput.classList.add('company-name');
    
    const reviewCountInput = document.createElement('input');
    reviewCountInput.setAttribute('type', 'number');
    reviewCountInput.setAttribute('placeholder', 'Number of Reviews');
    reviewCountInput.classList.add('review-count');
    
    const reviewButton = document.createElement('button');
    reviewButton.textContent = 'Add Review';
    reviewButton.addEventListener('click', () => addReview(reviewCountInput));
    
    companyDiv.appendChild(companyNameInput);
    companyDiv.appendChild(reviewCountInput);
    companyDiv.appendChild(reviewButton);
    
    companiesContainer.appendChild(companyDiv);
  }
  
// Function to add a review for a company
function addReview(reviewCountInput) {
    const currentCount = parseInt(reviewCountInput.value) || 0;
    reviewCountInput.value = currentCount + 1;
    calculateTotal(); // Recalculate total pay
  }
  
// Function to calculate total pay
function calculateTotal() {
    const reviewInputs = document.querySelectorAll('.review-count');
    let totalPay = 0;
    reviewInputs.forEach(input => {
      const reviews = parseInt(input.value) || 0;
      const companyName = input.previousElementSibling.value || 'Unknown Company';
      let payPerReview = companyName.trim().startsWith('#') ? 0.90 : 2; // Set pay per review
      totalPay += reviews * payPerReview;
    });
    
    document.getElementById('total-pay').textContent = totalPay.toFixed(2);
  }
  
  
  
  
  
