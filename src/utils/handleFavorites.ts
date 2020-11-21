const handleFavoriteButton = async (id: number, isFavorite: boolean, reRenderCallback: any) => {
  try {
    await fetch("http://localhost:3004/albums/" + id, {
      method: "PATCH",
      body: JSON.stringify({"favorite": !isFavorite}),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    });
    reRenderCallback();
  }
  catch (error) {
    alert("Error: Couldn't connect to server!");
  }
}

export default handleFavoriteButton;