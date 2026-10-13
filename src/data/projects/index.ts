// To add a project: create a file next to this one that exports a Project, then add it to this list.
import type { Project } from '../types';
import { nctf } from './nctf';
import { fillmedWebsite } from './fillmed-website';
import { fillmedAcademy } from './fillmed-academy';
import { medicalEvents } from './medical-events';
import { kinassayLab } from './kinassay-lab';
import { groupm } from './groupm';
import { formula1 } from './formula1';

export const projects: Project[] = [nctf, fillmedWebsite, fillmedAcademy, medicalEvents, kinassayLab, groupm, formula1].sort((a, b) => a.order - b.order);
