export const sendMessage = async (query, history) => {
  try {
    // eslint-disable-next-line no-undef
    const response = await fetch(aichwp_ajax.ajax_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        action: 'aichwp_chat',
        query: query,
        history: JSON.stringify(history)
      })
    })

    const data = await response.json()
    if (data.success) {
      return data.data
    } else {
      throw new Error('Chat request failed')
    }
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}
