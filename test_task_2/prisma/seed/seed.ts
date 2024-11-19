/**
 * ! Executing this script will delete all data in your database and seed it with 10 user.
 * ! Make sure to adjust the script to your needs.
 * Use any TypeScript runner to run this script, for example: `npx tsx seed.ts`
 * Learn more about the Seed Client by following our guide: https://docs.snaplet.dev/seed/getting-started
 */
import { createSeedClient } from '@snaplet/seed';
import { copycat } from '@snaplet/copycat';

const main = async () => {
  const seed = await createSeedClient({
    dryRun: false,
  });

  const usersQty = 1000000;

  // Truncate all tables in the database
  await seed.$resetDatabase();

  await seed.user((x) =>
    x(usersQty, {
      name: (ctx) => copycat.firstName(ctx.seed),
      surname: (ctx) => copycat.lastName(ctx.seed),
      age: (ctx) => copycat.int(ctx.seed, { min: 10, max: 80 }),
      sex: (ctx) =>
        copycat.oneOf<'MALE' | 'FEMALE'>(ctx.seed, ['MALE', 'FEMALE']),
      problem: (ctx) => copycat.bool(ctx.seed),
    }),
  );

  // Type completion not working? You might want to reload your TypeScript Server to pick up the changes

  console.log('Database seeded successfully!');

  process.exit();
};

main();
