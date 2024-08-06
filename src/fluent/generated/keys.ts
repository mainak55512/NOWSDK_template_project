import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    cs0: {
                        table: 'sys_script_client'
                        id: '604c55d67e8545c2b1ed289d7b5fd4a9'
                    }
                    br0: {
                        table: 'sys_script'
                        id: 'a199dfcf9d224e05acc56648ade51ccb'
                    }
                    br1: {
                        table: 'sys_script'
                        id: 'c32109bdb9fb4ea3a11df149e63b5cdd'
                    }
                }
            }
        }
    }
}
