// admin-script.js
jQuery(document).ready(function ($) {
  $('.aichwp-color-picker').wpColorPicker({
    change: function (event, ui) {
      var color = $(this)
        .attr('name')
        .replace('aichwp_settings[', '')
        .replace(']', '')
      var newColor = ui.color.toString()
      window.aichwp_color_vars[color] = newColor
      reloadChatApp()
    }
  })

  // Reset color to default
  $('.aichwp-reset-color').on('click', function (e) {
    e.preventDefault()
    var color = $(this).data('color')
    var defaultColors = {
      aichwpBgColor: '#f3f4f6',
      aichwpAIChatMessageBgColor: '#3c82f6',
      aichwpAIChatMessageTextColor: '#ffffff',
      aichwpUserChatMessageBgColor: '#ffffff',
      aichwpUserChatMessageTextColor: '#001827',
      aichwpChatClearChatTextColor: '#4b5563',
      aichwpUserAvatarColor: '#001827',
      aichwpLoadingIconColor: '#3c82f6',
      aichwpSendButtonColor: '#3c82f6',
      aichwpSendButtonTextColor: '#ffffff',
      aichwpChatOpenButtonColor: '#3c82f6'
    }
    var defaultColor = defaultColors[color]
    var colorPicker = $('input[name="aichwp_settings[' + color + ']"]')
    colorPicker.wpColorPicker('color', defaultColor)
    window.aichwp_color_vars[color] = defaultColor
    reloadChatApp()
  })

  function reloadChatApp() {
    var chatAppContainer = $('#aichwp-chat-app')
    chatAppContainer.empty()
    $.getScript(
      aichwp_ajax.plugin_url + 'core/js/chat-app/build/static/js/aichwp.js'
    )
  }
})
