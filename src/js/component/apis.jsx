import React, { useState } from "react";

function obtenerInfo() {
    fetch('')
    .then((response)=> response.json())
    .then ((data)=> setTasks(data.results))
    .catch((error)=> console.log(error))
}


fetch('https://playground.4geeks.com/todo/users/{user_name}', {
    method: "PUT",
    body: JSON.stringify(todos),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(resp => {
      console.log(resp.ok); // Será true si la respuesta es exitosa
      console.log(resp.status); // El código de estado 200, 300, 400, etc.
      console.log(resp.text()); // Intentará devolver el resultado exacto como string
      return resp.json(); // Intentará parsear el resultado a JSON y retornará una promesa donde puedes usar .then para seguir con la lógica
  })
  .then(data => {
      // Aquí es donde debe comenzar tu código después de que finalice la búsqueda
      console.log(data); // Esto imprimirá en la consola el objeto exacto recibido del servidor
  })
  .catch(error => {
      // Manejo de errores
      console.log(error);
  });