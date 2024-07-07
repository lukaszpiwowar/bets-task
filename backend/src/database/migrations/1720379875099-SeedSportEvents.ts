import { MigrationInterface, QueryRunner } from "typeorm";

export class SeedSportEvents1720379875099 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE sport_event (
                event_id SERIAL PRIMARY KEY,
                event_name TEXT NOT NULL,
                odds FLOAT NOT NULL
            );
        `);


        await queryRunner.query(`
            INSERT INTO sport_event (event_id, event_name, odds)
            VALUES (1, 'Arsenal vs Chelsea', 1.5),
                     (2, 'Liverpool vs Manchester United', 2.0),
                     (3, 'Barcelona vs Real Madrid', 2.5),
                     (4, 'Bayern Munich vs Borussia Dortmund', 2.0),
                     (5, 'Juventus vs AC Milan', 1.8)
                     ;
                     
        `);

        await queryRunner.query(`
            SELECT setval('sport_event_event_id_seq', (SELECT MAX(event_id) FROM sport_event) + 1);
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DELETE FROM sport_event WHERE event_id IN (1, 2, 3, 4, 5);
        `);
    }

}
