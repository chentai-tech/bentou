var script_url = "https://script.google.com/macros/s/AKfycbzMA0bD12KisWPsijBwhDqH3ev0ozmhB98ZkJDlutf6e_aT1Ciu1eoG2mdc6nyKT_KtDg/exec";
$(document).ready(function ($) {
    $("#google-sheet").submit(function (event) {
		$('#name, #option').prop("disabled", false);
        var name = $("#name").val();
		var value = $('.option-select').val();
		
		var url = script_url + "?callback=ctrlq&name=" + name + "&phone=" + value + "&action=create";
        var request = $.ajax({
            url: url,
            type: "POST"
        });
        request.done(function (response, textStatus, jqXHR) {
            window.location.reload();
        });
        request.always(function () {
			$('#name, #option').prop("disabled", true);
        });
		alert("提交完成!!注意!!務必等到表單重置後才算成功");
        event.preventDefault();
    })
})
