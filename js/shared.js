const fetchData = async (query) => {
  try {
    const uri = "http://localhost:3004/";
    const response = await fetch(uri+query);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}