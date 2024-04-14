<script lang="ts">
    import {
        PUBLIC_AUTHOR,
        PUBLIC_DESCRIPTION,
        PUBLIC_SITE_NAME,
    } from "$env/static/public";

    let { title, description }: { title?: string; description?: string } =
        $props();
</script>

<svelte:head>
    <title>{title ? title + " | " : ""}{PUBLIC_SITE_NAME}</title>
    <meta name="author" content={PUBLIC_AUTHOR} />
    <meta name="og:sitename" content={PUBLIC_SITE_NAME} />

    <meta name="description" content={description || PUBLIC_DESCRIPTION} />
</svelte:head>
