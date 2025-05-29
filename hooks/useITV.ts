import { createClient } from '@/lib/supabase-client'
import { ITV } from '@prisma/client'

export const useITV = () => {
    const supabase = createClient()

    // 创建 ITV 记录
    const createITV = async (data: Omit<ITV, 'id' | 'createdAt' | 'updatedAt'>) => {
        const { data: result, error } = await supabase
            .from('ITV')
            .insert(data)
            .select()
            .single()

        if (error) throw error
        return result
    }

    // 获取单个 ITV 记录
    const getITV = async (id: string) => {
        const { data, error } = await supabase
            .from('ITV')
            .select('*, video(*)')
            .eq('id', id)
            .single()

        if (error) throw error
        return data
    }

    // 获取用户的 ITV 列表
    const getUserITVs = async (userId: string) => {
        const { data, error } = await supabase
            .from('ITV')
            .select('*, video(*)')
            .eq('userId', userId)
            .order('createdAt', { ascending: false })

        if (error) throw error
        return data
    }

    // 更新 ITV 状态
    const updateITVStatus = async (id: string, status: number) => {
        const { data, error } = await supabase
            .from('ITV')
            .update({ status })
            .eq('id', id)
            .select()
            .single()

        if (error) throw error
        return data
    }

    // 删除 ITV 记录
    const deleteITV = async (id: string) => {
        const { error } = await supabase
            .from('ITV')
            .delete()
            .eq('id', id)

        if (error) throw error
    }

    return {
        createITV,
        getITV,
        getUserITVs,
        updateITVStatus,
        deleteITV
    }
} 