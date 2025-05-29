import { createClient } from '@/lib/supabase-client'
import { Video } from '@prisma/client'

export const useVideo = () => {
    const supabase = createClient()

    // 创建 Video 记录
    const createVideo = async (data: Omit<Video, 'id' | 'createdAt' | 'updatedAt'>) => {
        const { data: result, error } = await supabase
            .from('Video')
            .insert(data)
            .select()
            .single()

        if (error) throw error
        return result
    }

    // 获取单个 Video 记录
    const getVideo = async (id: string) => {
        const { data, error } = await supabase
            .from('Video')
            .select('*, ttv(*), itv(*)')
            .eq('id', id)
            .single()

        if (error) throw error
        return data
    }

    // 更新 Video 信息
    const updateVideo = async (id: string, data: Partial<Omit<Video, 'id' | 'createdAt' | 'updatedAt'>>) => {
        const { data: result, error } = await supabase
            .from('Video')
            .update(data)
            .eq('id', id)
            .select()
            .single()

        if (error) throw error
        return result
    }

    // 删除 Video 记录
    const deleteVideo = async (id: string) => {
        const { error } = await supabase
            .from('Video')
            .delete()
            .eq('id', id)

        if (error) throw error
    }

    return {
        createVideo,
        getVideo,
        updateVideo,
        deleteVideo
    }
} 