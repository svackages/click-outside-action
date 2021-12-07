/// <reference types="@sveltejs/kit" />

declare interface IActionReturn {
    update?: (parameters: any) => void,
	destroy?: () => void
}
