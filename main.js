var script_url = "https://script.google.com/macros/s/AKfycbzhKlfJ6l7LfbZ9BKemZJax2oM9UV3PGoDXwZHaqX_gL0ldYXZLpjFbI6YEevSI88qqVA/exec";
$(document).ready(function ($) {
    $("#google-sheet").submit(function (event) {
        //$('#date, #time, #name, #option').prop("disabled", false);
		$('#name, #checkbox, #option').prop("disabled", false);
        var name = $("#name").val();
		var phone = "";
		/* if ($('#checkbox').is(':checked')) {
			if ($('#option1').is(':checked')) {
				phone = "1";
			} else {
				time = "1";
			}
		} */
        if ($('#checkbox').is(':checked')) {
			if ($('#option1').is(':checked')) { 
				phone = $('#option1').val();
			} else if ($('#option2').is(':checked')) {
				phone = $('#option2').val();
			} else if ($('#option3').is(':checked')) {
				phone = $('#option3').val();
			} else {
				phone = $('#option4').val();
			}
		}
		var url = script_url + "?callback=ctrlq&name=" + name + "&phone=" + phone + "&action=create";
        var request = $.ajax({
            url: url,
            type: "POST"
        });
        request.done(function (response, textStatus, jqXHR) {
            window.location.reload();
        });
        request.always(function () {
			$('#name, #checkbox, #option').prop("disabled", true);
        });
		alert("提交完成!!注意!!務必等到表單重置後才算成功");
        event.preventDefault();
    })
})
