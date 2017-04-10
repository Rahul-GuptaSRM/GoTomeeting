 
(function() {
  'use strict';
  return {
    initialize: function() {

 events: [
      {event:'click', selector:'#request', callback: 'clickButton'}
    ],



      var self = this,
          path = '/',
          headers = { Authorization: 'bearer <%= access_token %>'},
          reqData = { headers: headers, isOAuth: true },
          url = 'https://api.onedrive.com/v1.0/drive/root:' + path + ':/children';

      this.$request.get(url, reqData)
      .done(function(data) {
        var response = JSON.parse(data.response)['value'];
        var html = '';
       /* if (response.length == 0) {
          jQuery(self.$container).find('#lfiles').append("<div class='alert alert-warning flash-box'>No files in your One Drive.</div>");
        }
        else {
          response.map(function(resp) {
            if (resp.folder) {
              html += '<div class="onedrive-div"><div class="onedrive-folder-icon"></div>';
            } else {
              html += '<div class="onedrive-div"><div class="onedrive-file-icon"></div>';
            }
            html += '<div class="onedrive-content">'+resp['name']+'</div></div><br style="clear:both;"/>';
          });
          jQuery(self.$container).find('#lfiles').append(html);
        }*/
      })
      .fail(function() {
        jQuery(self.$container).find('#lfiles').append("<div class='alert alert-danger flash-box'>Error displaying files</div>");
      });
    if(page_type == "ticket") {
        var requesterName = domHelper.ticket.getTicketInfo()
          .helpdesk_ticket.requester_name;
        jQuery(this.$container).find('#apptext').text("Ticket created by " + requesterName);
      }
      else if(page_type == "contact"){
        var agentName = domHelper.contact.getContactInfo().user.name;
        jQuery(this.$container).find('#apptext').text("Hello " + agentName);
      }
    },

    clickButton : function()
    {

     //console.log(jQuery(this.$container).find("#sub").value);
      // jQuery(this.$container).find("#meeting_id").text(jQuery("#sub").val());

      var JS = {};
var t;
    var serviceurl = "https://api.citrixonline.com/G2M/rest/meetings";
   var t;  = jQuery(this.$container).find('#sub').val();
   JS["subject"]  = JSON.stringify(t);

   t = jQuery(this.$container).find('#start').val();
    JS["startTime"] = JSON.stringify(t);
     
     t=  jQuery(this.$container).find('#end').val();
     JS["endTime"] = JSON.stringify(t);

     t=  jQuery(this.$container).find('#meeting').val();
     JS["meetingType"] = JSON.stringify(t);

       var postData = "";
       var xmlhttp = new XMLHttpRequest();
       xmlhttp.open('post',serviceurl,false);
       xmlhttp.setRequestHeader("Accept","application/json");
        xmlhttp.setRequestHeader("content-type","application/json");
          xmlhttp.setRequestHeader("Authorization","OAuth oauth_token= "+uAN2nVBQrS0wQtu6nwqnJHdW8ivb);
          if(typeof content !== undefined)
          {
            postData = JS;
          }

          xmlhttp.send(postData);

          if(xmlhttp.status == 201)
          {
            ans = JSON.parse(xmlhttp.responseText);
            msg =  "url "+ans[0]["joinURL"]+" meeting ID" + result[0]["meetingid"];
          }
          else{
            console.info("Error");
          }
          //console.log("Request("+ httpRequestMethod)
        // https://rahulgupta.freshdesk.com/api/v2/contacts
       domHelper.ticket.openReply(msg);

       jQuery(this.$container).find('#apptext').text(msg);
    }
  };
})();