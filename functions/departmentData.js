const handler = async (event) => {
  try {
    const url ="https://testsyncoffice.netlify.app/.netlify/functions/api/getDepartmentData"

    const response = await fetch(url)
    const data = await response.json()
    
    return {
      statusCode: 200,
       body: JSON.stringify({ data })
      // body: JSON.stringify({ message: `Hello ${data}` }),

      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }