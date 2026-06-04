function status(request, response) {
  response.status(200).json({ cahve: "endpoint status " });
}

export default status;
