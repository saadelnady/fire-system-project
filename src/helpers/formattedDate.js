const formattedDate = (dateString) => {
  // Check for invalid inputs
  if (!dateString || isNaN(Date.parse(dateString))) {
    return "__";
  }

  // Parse the input date string to a Date object
  const date = new Date(dateString);

  // Get the day, month, and year from the Date object
  const day = date.getDate();
  const month = date.getMonth() + 1; // Months are zero-indexed in JavaScript
  const year = date.getFullYear();

  // Return formatted date string in the DD-MM-YYYY format
  return `${day}-${month}-${year}`;
};

export default formattedDate;
