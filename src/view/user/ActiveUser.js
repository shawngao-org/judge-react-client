import {Divider, Table, Tag} from "antd";

const columns = [
    {
        title: '学号/工号',
        dataIndex: 'key',
        key: 'key',
    },
    {
        title: '用户名',
        dataIndex: 'name',
        key: 'name',
        render: (_, record: { key: React.Key }) => {
            return (
                <a>{record.name}</a>
            );
        },
    },
    {
        title: '所在学院',
        dataIndex: 'college',
        key: 'college',
    },
    {
        title: '所在班级',
        key: 'cls',
        dataIndex: 'cls',
    },
    {
        title: '双因素认证',
        key: 'tfa',
        dataIndex: 'tfa',
        render: (_, { tfa }) => (
            <>
                <Tag color={tfa ? 'green' : 'red'} key={tfa}>
                    {tfa ? '已启用': '已禁用'}
                </Tag>
            </>
        ),
    },
];
const data = [
    {
        key: '0917420001',
        name: '范旭生',
        college: '信息工程学院',
        cls: 'B2007',
        tfa: true,
    },
    {
        key: '0917420002',
        name: '柏正纯',
        college: '信息工程学院',
        cls: 'B2006',
        tfa: false,
    },
    {
        key: '0917420003',
        name: '李岩',
        college: '信息工程学院',
        cls: 'B2007',
        tfa: false,
    },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
        disabled: record.name === 'Disabled User',
        // Column configuration not to be checked
        name: record.name,
    }),
};

export const ActiveUser = () => {
    return (
        <div style={{textAlign: "left", padding: "1rem"}}>
            <h1>活跃用户</h1>
            <Divider />
            <Table
                columns={columns}
                dataSource={data}
                rowSelection={{...rowSelection}}
            />
        </div>
    );
}
