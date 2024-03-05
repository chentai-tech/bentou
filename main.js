var script_url = "https://script.google.com/macros/s/AKfycbzgR50S9X2OA9p4QsjvZu2WQ6rE8lUR3CCEhPAckEnyAm5__pC0Bej8EIDdnMwEb9Ah_A/exec";
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
			} else {
				phone = $('#option2').val(); 
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
		alert("申請完成!!");
        event.preventDefault();
    })
})