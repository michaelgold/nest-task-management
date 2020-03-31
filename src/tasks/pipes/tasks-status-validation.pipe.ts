import { PipeTransform, BadRequestException } from "@nestjs/common";
import { TaskStatus } from "../task.model";

export class TaskStatusValidationPipe implements PipeTransform {
    readonly allowedStatusses = [
        TaskStatus.OPEN,
        TaskStatus.IN_PROGRESS,
        TaskStatus.DONE,
    ];

    transform(value: any) {
        if (!this.isStatusValid(value.status)) {
            throw new BadRequestException(`${value.status} is an invalid status`)
        }

        return value;
    }

    private isStatusValid(status: any) {
        const idx = this.allowedStatusses.indexOf(status)
        return idx !== -1;
    }

}