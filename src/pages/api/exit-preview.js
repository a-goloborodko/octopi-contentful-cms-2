const handler = async (_, res) => {
    res.clearPreviewData()
    res.writeHead(307, { Location: '/posts' })
    res.end()
  }
  
  export default handler