$(function () {
    var Aladdin = new blk.API();
    var $table = $('#displayTable');
    var table;

    function submit(ids, skipColumns, columnOrder) {
        if (table) {
            table.destroy();
        }
        $table.html('<p>Retrieving...</p>');
        Aladdin.securityData({
            identifiers: ids,
            filter: 'countryCode:US'
        }, function (data) {
            var securities = data.resultMap.SECURITY;
            var skipCols = skipColumns || [];
            var startingColumns = columnOrder || [];
            var columns = [];
            securities.forEach(function (sec) {
                for (var field in sec) {
                    if ((typeof sec[field] === 'string' || typeof sec[field] === 'number') && !skipCols.includes(field) && !startingColumns.includes(field) && !columns.includes(field)) {
                        columns.push(field);
                    }
                }
            });
            columns = startingColumns.concat(columns.sort());
            var tableData = securities.map(function (sec) {
                return columns.map(function (col) {
                    return sec[col] || '-';
                });
            });
            $table.empty();
            table = $table.DataTable({
                data: tableData,
                columns: columns.map(function (col) {
                    return {
                        title: StringUtil.camelToHuman(col) + '\n(' + col + ')'
                    }
                }),
                order: [
                    [0, 'desc']
                ]
            });
        });
    }

    var $ids = $('#ids');
    var skipCols = ['score', '@type'];
    var colOrder = ['description', 'asOfDate', 'ticker'];

    $('#submit').click(function () {
        submit($ids.val(), skipCols, colOrder)
    });
    submit($ids.val(), skipCols, colOrder);
});