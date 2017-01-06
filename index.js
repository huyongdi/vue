$(function () {
    $("#test_a").on("click", function () {
        return ExcellentExport.excel(this, 'table_test', 'HY11111D');
    });
    var tableToExcel = new Vue({
        el: '#table_test',
        data: {
            th: [],
            td: []
        },
        methods: {
            resetData: function (resetObj) {
                this.th = resetObj.th;
                this.td = resetObj.td;
            }
        }
    });
    setTimeout(function () {
        var obj = {
            th: [1, 2],
            td: [3, 4]
        };
        tableToExcel.resetData(obj);
    }, 1000)
});
