import type { Creator } from '../scripts/types/metadata'
import { getAvatarUrlByGithubName } from '../scripts/utils'

/** 文本 */
export const siteName = 'psych-guide'
export const siteShortName = 'psych-guide'
export const siteDescription = '心理学系生存指南'

/** 文档所在目录 */
export const include = ['指南']

/** Repo */
export const githubRepoLink = 'https://github.com/psych-ucas/psych-guide'

/** 无协议前缀域名 */
export const plainTargetDomain = 'psych.ucas.wtf'
/** 完整域名 */
export const targetDomain = `https://${plainTargetDomain}`

/** 创作者 */
export const creators: Creator[] = [
  {
    name: '芷沐沐',
    avatar: '',
    username: 'limesty',
    title: 'wwww',
    desc: 'wwww',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/limesty' },
      { type: 'twitter', icon: 'twitter', link: 'https://twitter.com/limestty' },
    ],
    nameAliases: ['芷沐沐', 'limesty'],
    emailAliases: ['limesty@limesty.moe'],
  },
].map<Creator>((c) => {
  c.avatar = c.avatar || getAvatarUrlByGithubName(c.username)
  return c as Creator
})

export const creatorNames = creators.map(c => c.name)
export const creatorUsernames = creators.map(c => c.username || '')
