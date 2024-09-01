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
    <title
        >{title
            ? title[0].toUpperCase() + title.slice(1) + " | "
            : ""}{PUBLIC_SITE_NAME}</title
    >
    <meta name="author" content={PUBLIC_AUTHOR} />
    <meta name="og:sitename" content={PUBLIC_SITE_NAME} />

    <meta name="description" content={description || PUBLIC_DESCRIPTION} />
</svelte:head>

<!-- 
    @component
    Set title, description, author and sitename to document/HTML head for SEO.
    
    @example
    ```svelte
        <Head title="Home Page" />
    ```
 -->
