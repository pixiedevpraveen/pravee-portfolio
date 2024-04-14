<script lang="ts">
    import { PUBLIC_ABOUT_DATA } from "$env/static/public";
    import Head from "$lib/components/Head.svelte";

    type Education = {
        course: string;
        major: string;
        cgpa: string;
        college: string;
        year: string;
    };

    const tableData: Education[] = JSON.parse(PUBLIC_ABOUT_DATA)['education'];
    const tableHeaders = Object.keys(
        tableData[0],
    ) as unknown as keyof Education;
</script>

<Head title="About" />

<main class="underline-wavy-headings flex flex-col gap-2 p-2">
    <h1>About me</h1>

    <section>
        <h2>Hello!</h2>
        <p class="px-2">
            I'm <strong>Praveen Yadav</strong>, Full-Stack Developer with a
            passion for building innovative and user-friendly web applications.
            Proficient in JavaScript, C++, Python, Vue.js, Nuxt.js, and other
            in-demand technologies. Experienced in cloud computing with AWS and
            database management with Postgres.
        </p>
    </section>

    <section>
        <h3>Skills</h3>
        <ul class="px-2">
            <li>Programming Languages: JavaScript, C++, C, Python</li>
            <li>Frameworks: Vue.js, Nuxt.js</li>
            <li>Databases: Postgres</li>
            <li>Cloud: AWS</li>
            <li>Other: Git, OOP, DBMS</li>
        </ul>
    </section>
    <section>
        <h3>Education</h3>

        <table class="px-1 overflow-auto">
            <thead class="bg-white/10">
                <tr>
                    {#each tableHeaders as key (key)}
                        <th>{key}</th>
                    {/each}
                </tr>
            </thead>
            <tbody>
                {#each tableData as row (row["course"])}
                    <tr class="hover:bg-white/5">
                        {#each tableHeaders as key (key)}
                            <td>{row[key as keyof Education]}</td>
                        {/each}
                    </tr>
                {/each}
            </tbody>
        </table>
    </section>

    <section>
        <h3>Internship</h3>
        <p class="px-2">
            Full Stack Developer (Programmer Analyst Trainee) - Cognizant
            (Remote) (Feb 2022 - Jul 2022) Gained experience in Java, Spring,
            React, and web development fundamentals.
        </p>
    </section>

    <section>
        <h3>Projects</h3>

        <ul class="px-2">
            <li>
                Career Begin
                <a target="_blank" href="https://careerbegin.in"
                    >https://careerbegin.in</a
                >
                A dynamic job search and exam preparation platform with an admin
                panel for content management.
            </li>
            <li>
                Apna Forum

                <a target="_blank" href="https://apnaforum.vercel.app"
                    >apnaforum.vercel.app
                </a>,
                <a target="_blank" href="https://github.com/pixiedevs/acadEval"
                    >www.github.com/pixiedevs/acadEval
                </a>
                A forum for students to connect and seek help from peers and seniors.
            </li>
            <li>
                Pcoder

                <a target="_blank" href="https://praveenyadav.vercel.app"
                    >https://praveenyadav.vercel.app</a
                >
                A personal portfolio and blogging website built with Nuxt.js (Vue
                3) and Django REST API.
            </li>
        </ul>
    </section>

    <section>
        <h3>Achievements</h3>
        <ul class="px-2">
            <li>
                Shortlisted for the 2nd round of the Accenture Innovation
                Challenge (2021).
            </li>
            <li>
                Qualified for the 2nd round of Facebook HackerCup (2020, 2021).
            </li>
            <li>
                Participated in Google CodeJam and Google Kickstart coding
                competitions.
            </li>
        </ul>
    </section>
</main>
