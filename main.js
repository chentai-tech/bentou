var script_url = "https://script.google.com/macros/s/AKfycbzMA0bD12KisWPsijBwhDqH3ev0ozmhB98ZkJDlutf6e_aT1Ciu1eoG2mdc6nyKT_KtDg/exec";
$(document).ready(function ($) {
	const button = $('#btnSubmit');

	function checkButtonStatus() {
		const today = new Date();
		var nowHour = today.getHours();
		const startHour = 6;
		const endHour = 10;
		const isInRange = nowHour >= startHour && nowHour <= endHour;
	
		if (isInRange) {
		button.prop('disabled', true);
		} else {
		button.prop('disabled', false);
		}
	}
	
	// Check button status when the page loads
	checkButtonStatus();
	
	// Check button status every second
	setInterval(checkButtonStatus, 1000);

    $("#google-sheet").submit(function (event) {
		$('#name, #checkbox, #option').prop("disabled", false);
        var name = $("#name").val();
		var phone = "";

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
