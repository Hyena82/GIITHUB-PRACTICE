export const incrementValue = (payload) => {
  return {
    type: "ADDTODO",
    payload
  }
}

export const removeValue = (payload) => {
  return {
    type: "REMOVETODO",
    payload
  }
}
