import { defineConfig } from "vitepress";
import type { DefaultTheme } from "vitepress";
import fxConfig from "@fuxishi/vitepress-theme/config";
import type { FxThemeConfig } from "@fuxishi/vitepress-theme";

type ThemeConfig = DefaultTheme.Config & FxThemeConfig;

export default defineConfig<ThemeConfig>({
	extends: fxConfig,
	srcDir: "src",
	lang: "zh-CN",
	title: "Wing Shot",
	description: "基于 Snow Shot 二次开发的高效截图工具",
	cleanUrls: true,
	lastUpdated: true,
	head: [["link", { rel: "icon", type: "image/png", href: "/favicon.png" }]],
	themeConfig: {
		logo: {
			light: "/app-icon-nav.png",
			dark: "/app-icon-nav-dark.png",
		},
		nav: [
			{ text: "下载安装", link: "/download/" },
			{ text: "使用说明", link: "/guide/" },
			{ text: "WingShot 新功能", link: "/guide/features/wing-shot" },
			{ text: "常见问题", link: "/faq/common/1" },
			{ text: "社区交流", link: "/community/" },
			{ text: "关于项目", link: "/about/" },
			{
				text: "更新日志",
				link: "https://github.com/Anfioo/WingShot/releases",
			},
		],
		sidebar: {
			"/download/": [{ text: "下载安装", link: "/download/" }],
			"/guide/": [
				{ text: "快速入门", link: "/guide/" },
				{ text: "WingShot 新功能", link: "/guide/features/wing-shot" },
				{
					text: "软件功能",
					collapsible: true,
					items: [
						{
							text: "截图历史",
							link: "/guide/function/captureHistory",
						},
						{
							text: "文本提取",
							link: "/guide/function/detectOcr",
						},
						{ text: "翻译", link: "/guide/function/translate" },
						{ text: "AI 对话", link: "/guide/function/aiChat" },
					],
				},
				{
					text: "个性化",
					collapsible: true,
					items: [
						{
							text: "外观配色",
							link: "/guide/personalization/appearance",
						},
						{
							text: "插件",
							link: "/guide/personalization/plugin",
						},
					],
				},
				{
					text: "设置",
					collapsible: true,
					items: [
						{ text: "界面设置", link: "/guide/settings/ui" },
						{ text: "功能设置", link: "/guide/settings/function" },
						{ text: "热键设置", link: "/guide/settings/hotKeys" },
						{ text: "系统设置", link: "/guide/settings/system" },
					],
				},
			],
			"/faq/": [
				{
					text: "常见问题",
					collapsible: true,
					items: [
						{
							text: "截图卡顿，绘制时反应迟钝、存在延迟",
							link: "/faq/common/1",
						},
						{
							text: "快捷功能的快捷键无法使用",
							link: "/faq/common/2",
						},
					],
				},
				{
					text: "Windows",
					collapsible: true,
					items: [
						{
							text: "部分窗口下无法通过快捷键唤起截图",
							link: "/faq/windows/1",
						},
					],
				},
				{
					text: "MacOS",
					collapsible: true,
					items: [
						{
							text: "Wing Shot 已损坏，无法打开",
							link: "/faq/macOs/1",
						},
						{
							text: "更新 Wing Shot 提示无权限",
							link: "/faq/macOs/2",
						},
					],
				},
			],
			"/community/": [{ text: "社区交流", link: "/community/" }],
			"/about/": [{ text: "关于项目", link: "/about/" }],
		},
		socialLinks: [
			{ icon: "github", link: "https://github.com/Anfioo/WingShot" },
		],
		footer: {
			message: "Wing Shot 是基于 Snow Shot 的二次开发项目",
			copyright: "© 2026 anfioo · 原项目版权归原作者所有",
		},
		docFooter: {
			prev: "上一篇",
			next: "下一篇",
		},
		outlineTitle: "页面导航",
		lastUpdatedText: "最后更新时间",
		search: {
			provider: "local",
			options: {
				translations: {
					button: {
						buttonText: "搜索",
						buttonAriaLabel: "搜索",
					},
					modal: {
						noResultsText: "未搜索到相关结果",
						resetButtonTitle: "重置搜索",
						backButtonTitle: "关闭搜索",
						displayDetails: "显示详细列表",
						footer: {
							selectText: "选择",
							navigateText: "切换",
							closeText: "关闭",
							navigateUpKeyAriaLabel: "上箭头",
							navigateDownKeyAriaLabel: "下箭头",
							selectKeyAriaLabel: "回车",
							closeKeyAriaLabel: "esc",
						},
					},
				},
			},
		},
		confetti: true,
		smoothScroll: true,
	},
});
