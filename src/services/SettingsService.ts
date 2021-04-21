import { Settings } from "node:http2";
import { getCustomRepository, Repository } from "typeorm";
import { Setting } from "../entities/Setting";
import { SettingsRepository } from "../repositories/SettingsRepository";

interface iSettingsCreate{
    chat: boolean;
    username: string
}

class SettingsService {

    private settingsRepository: Repository<Setting>

    constructor() {
        this.settingsRepository = getCustomRepository(SettingsRepository)
    }

    async create({ chat, username }) {
        
        //const settingsRepository = getCustomRepository(SettingsRepository);

        //Select * from settings where username = "username" limit 1;
        const userAlreadyExists = await this.settingsRepository.findOne({
            username
        })

        const settings = this.settingsRepository.create({
            chat,
            username
        })

        if (userAlreadyExists) {
            throw new Error("User already exists!");
        }

        await this.settingsRepository.save(settings);

        return settings;
    }

}

export { SettingsService }