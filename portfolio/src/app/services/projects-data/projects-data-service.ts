import { computed, inject, Service } from '@angular/core';
import { Project, ProjectsService } from '../../api/openapi';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, map, of, startWith } from 'rxjs';

export type ProjectsState =
  | {
      status: 'loading';
      projects: Project[];
    }
  | {
      status: 'success';
      projects: Project[];
    }
  | {
      status: 'error';
      projects: Project[];
    };

@Service()
export class ProjectsDataService {
  private readonly projectsService = inject(ProjectsService);

  readonly state = toSignal(
    this.projectsService.projectsList().pipe(
      map((projects): ProjectsState => ({
        status: 'success',
        projects,
      })),
      startWith<ProjectsState>({
        status: 'loading',
        projects: [],
      }),
      catchError(() =>
        of<ProjectsState>({
          status: 'error',
          projects: [],
        }),
      ),
    ),
    {
      initialValue: {
        status: 'loading',
        projects: [],
      },
    },
  );

  readonly projects = computed(() => this.state().projects);

  readonly featuredProject = computed(() => this.projects().find((project) => project.is_featured));

  readonly technologies = computed(() => {
    const technologies = this.projects().flatMap((project) => project.technologies);

    return [
      ...new Map(
        technologies.map((technology) => [technology.name, { name: technology.name }]),
      ).values(),
    ];
  });

  readonly features = computed(() => [
    ...new Set(this.projects().flatMap((project) => project.features)),
  ]);

  readonly industries = computed(() => [
    ...new Set(this.projects().map((project) => project.industry.name)),
  ]);

  getProjectByUuid(uuid: string): Project | undefined {
    return this.projects().find((project) => project.uuid === uuid);
  }
}
