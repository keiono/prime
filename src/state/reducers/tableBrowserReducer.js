/**
 *
 * Created by kono on 2015/12/26.
 */



const defaultTableData = {
    _rows: [
        {name: 'Rylan'},
        {name: 'Amelia'},
        {name: 'Estevan'},
        {name: 'Florence'},
        {name: 'Tressa'}
    ],

    columns: [
    {
        key: 'id',
        name: 'ID'
    },
    {
        key: 'name',
        name: 'Name'
    },
    {
        key: 'count',
        name: 'Count'
    }]
};


export default function tableBrowser(state = defaultTableData, action) {

    switch (action.type) {
        default:
            return state;
    }
}

