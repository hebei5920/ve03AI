import { createClient } from '@/lib/supabase-client'
import { TTV } from '@prisma/client'

export const useTTV = () => {
    const supabase = createClient()

    // 创建 TTV 记录
    const createTTV = async (data: Omit<TTV, 'id' | 'createdAt' | 'updatedAt'>) => {
        const { data: result, error } = await supabase
            .from('TTV')
            .insert(data)
            .select()
            .single()

        if (error) throw error
        return result
    }

    // 获取单个 TTV 记录
    const getTTV = async (id: string) => {
        const { data, error } = await supabase
            .from('TTV')
            .select('*, video(*)')
            .eq('id', id)
            .single()

        if (error) throw error
        return data
    }

    // 获取用户的 TTV 列表
    const getUserTTVs = async (userId: string) => {
        const { data, error } = await supabase
            .from('TTV')
            .select('*, video(*)')
            .eq('userId', userId)
            .order('createdAt', { ascending: false })

        if (error) throw error
        return data
    }

    // 更新 TTV 状态
    const updateTTVStatus = async (id: string, status: number) => {
        const { data, error } = await supabase
            .from('TTV')
            .update({ status })
            .eq('id', id)
            .select()
            .single()

        if (error) throw error
        return data
    }

    // 删除 TTV 记录
    const deleteTTV = async (id: string) => {
        const { error } = await supabase
            .from('TTV')
            .delete()
            .eq('id', id)

        if (error) throw error
    }

    return {
        createTTV,
        getTTV,
        getUserTTVs,
        updateTTVStatus,
        deleteTTV
    }
} 