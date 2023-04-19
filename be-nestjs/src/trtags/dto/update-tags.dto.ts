import { IsNotEmpty, IsString } from "class-validator";

export class UpdateTagsDto {
    @IsNotEmpty()
    @IsString()
    readonly name: string;
}