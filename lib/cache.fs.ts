import { ProjectType } from "@/types/projects"
import { promises as fs } from "fs"
import path from "path"
import { getProjects } from "@/lib/projects"
import ProjectCache from "@/lib/cache"

const projectsFile = path.join(process.cwd(), "projects.db")

export default class FsCache implements ProjectCache {

	async project(name: string): Promise<ProjectType | undefined> {
		const projects: ProjectType[] = await getProjects()
		return projects?.find((project) => project.name === name) || undefined
	}

	async projectNames(): Promise<string[] | undefined> {
		const projects = await this.projects()
		return projects?.map((project) => project.name) || undefined
	}

	async projects(): Promise<ProjectType[] | undefined> {
		try {
			const data = await fs.readFile(projectsFile)
			const projects: ProjectType[] = JSON.parse(data as unknown as string)
			return projects
		} catch (error) {
			console.log(error)
			return undefined
		}
	}

	async set(projects: ProjectType[]) {
		await fs.writeFile(
			projectsFile,
			JSON.stringify(projects),
		)
	}

}
