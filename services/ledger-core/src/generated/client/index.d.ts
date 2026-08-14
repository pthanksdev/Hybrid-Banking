
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model LedgerAccount
 * 
 */
export type LedgerAccount = $Result.DefaultSelection<Prisma.$LedgerAccountPayload>
/**
 * Model LedgerEntry
 * 
 */
export type LedgerEntry = $Result.DefaultSelection<Prisma.$LedgerEntryPayload>
/**
 * Model IdempotencyKey
 * 
 */
export type IdempotencyKey = $Result.DefaultSelection<Prisma.$IdempotencyKeyPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AccountType: {
  ASSET: 'ASSET',
  LIABILITY: 'LIABILITY',
  EQUITY: 'EQUITY',
  REVENUE: 'REVENUE',
  EXPENSE: 'EXPENSE'
};

export type AccountType = (typeof AccountType)[keyof typeof AccountType]

}

export type AccountType = $Enums.AccountType

export const AccountType: typeof $Enums.AccountType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more LedgerAccounts
 * const ledgerAccounts = await prisma.ledgerAccount.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more LedgerAccounts
   * const ledgerAccounts = await prisma.ledgerAccount.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.ledgerAccount`: Exposes CRUD operations for the **LedgerAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LedgerAccounts
    * const ledgerAccounts = await prisma.ledgerAccount.findMany()
    * ```
    */
  get ledgerAccount(): Prisma.LedgerAccountDelegate<ExtArgs>;

  /**
   * `prisma.ledgerEntry`: Exposes CRUD operations for the **LedgerEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LedgerEntries
    * const ledgerEntries = await prisma.ledgerEntry.findMany()
    * ```
    */
  get ledgerEntry(): Prisma.LedgerEntryDelegate<ExtArgs>;

  /**
   * `prisma.idempotencyKey`: Exposes CRUD operations for the **IdempotencyKey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IdempotencyKeys
    * const idempotencyKeys = await prisma.idempotencyKey.findMany()
    * ```
    */
  get idempotencyKey(): Prisma.IdempotencyKeyDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    LedgerAccount: 'LedgerAccount',
    LedgerEntry: 'LedgerEntry',
    IdempotencyKey: 'IdempotencyKey'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "ledgerAccount" | "ledgerEntry" | "idempotencyKey"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      LedgerAccount: {
        payload: Prisma.$LedgerAccountPayload<ExtArgs>
        fields: Prisma.LedgerAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LedgerAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LedgerAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerAccountPayload>
          }
          findFirst: {
            args: Prisma.LedgerAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LedgerAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerAccountPayload>
          }
          findMany: {
            args: Prisma.LedgerAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerAccountPayload>[]
          }
          create: {
            args: Prisma.LedgerAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerAccountPayload>
          }
          createMany: {
            args: Prisma.LedgerAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LedgerAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerAccountPayload>[]
          }
          delete: {
            args: Prisma.LedgerAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerAccountPayload>
          }
          update: {
            args: Prisma.LedgerAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerAccountPayload>
          }
          deleteMany: {
            args: Prisma.LedgerAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LedgerAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LedgerAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerAccountPayload>
          }
          aggregate: {
            args: Prisma.LedgerAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLedgerAccount>
          }
          groupBy: {
            args: Prisma.LedgerAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<LedgerAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.LedgerAccountCountArgs<ExtArgs>
            result: $Utils.Optional<LedgerAccountCountAggregateOutputType> | number
          }
        }
      }
      LedgerEntry: {
        payload: Prisma.$LedgerEntryPayload<ExtArgs>
        fields: Prisma.LedgerEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LedgerEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LedgerEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerEntryPayload>
          }
          findFirst: {
            args: Prisma.LedgerEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LedgerEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerEntryPayload>
          }
          findMany: {
            args: Prisma.LedgerEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerEntryPayload>[]
          }
          create: {
            args: Prisma.LedgerEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerEntryPayload>
          }
          createMany: {
            args: Prisma.LedgerEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LedgerEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerEntryPayload>[]
          }
          delete: {
            args: Prisma.LedgerEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerEntryPayload>
          }
          update: {
            args: Prisma.LedgerEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerEntryPayload>
          }
          deleteMany: {
            args: Prisma.LedgerEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LedgerEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LedgerEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerEntryPayload>
          }
          aggregate: {
            args: Prisma.LedgerEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLedgerEntry>
          }
          groupBy: {
            args: Prisma.LedgerEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<LedgerEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.LedgerEntryCountArgs<ExtArgs>
            result: $Utils.Optional<LedgerEntryCountAggregateOutputType> | number
          }
        }
      }
      IdempotencyKey: {
        payload: Prisma.$IdempotencyKeyPayload<ExtArgs>
        fields: Prisma.IdempotencyKeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IdempotencyKeyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IdempotencyKeyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload>
          }
          findFirst: {
            args: Prisma.IdempotencyKeyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IdempotencyKeyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload>
          }
          findMany: {
            args: Prisma.IdempotencyKeyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload>[]
          }
          create: {
            args: Prisma.IdempotencyKeyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload>
          }
          createMany: {
            args: Prisma.IdempotencyKeyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IdempotencyKeyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload>[]
          }
          delete: {
            args: Prisma.IdempotencyKeyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload>
          }
          update: {
            args: Prisma.IdempotencyKeyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload>
          }
          deleteMany: {
            args: Prisma.IdempotencyKeyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IdempotencyKeyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.IdempotencyKeyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload>
          }
          aggregate: {
            args: Prisma.IdempotencyKeyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIdempotencyKey>
          }
          groupBy: {
            args: Prisma.IdempotencyKeyGroupByArgs<ExtArgs>
            result: $Utils.Optional<IdempotencyKeyGroupByOutputType>[]
          }
          count: {
            args: Prisma.IdempotencyKeyCountArgs<ExtArgs>
            result: $Utils.Optional<IdempotencyKeyCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type LedgerAccountCountOutputType
   */

  export type LedgerAccountCountOutputType = {
    entries: number
  }

  export type LedgerAccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entries?: boolean | LedgerAccountCountOutputTypeCountEntriesArgs
  }

  // Custom InputTypes
  /**
   * LedgerAccountCountOutputType without action
   */
  export type LedgerAccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerAccountCountOutputType
     */
    select?: LedgerAccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LedgerAccountCountOutputType without action
   */
  export type LedgerAccountCountOutputTypeCountEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LedgerEntryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model LedgerAccount
   */

  export type AggregateLedgerAccount = {
    _count: LedgerAccountCountAggregateOutputType | null
    _min: LedgerAccountMinAggregateOutputType | null
    _max: LedgerAccountMaxAggregateOutputType | null
  }

  export type LedgerAccountMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.AccountType | null
    currency: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LedgerAccountMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.AccountType | null
    currency: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LedgerAccountCountAggregateOutputType = {
    id: number
    name: number
    type: number
    currency: number
    status: number
    metadata: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LedgerAccountMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    currency?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LedgerAccountMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    currency?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LedgerAccountCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    currency?: true
    status?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LedgerAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LedgerAccount to aggregate.
     */
    where?: LedgerAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LedgerAccounts to fetch.
     */
    orderBy?: LedgerAccountOrderByWithRelationInput | LedgerAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LedgerAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LedgerAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LedgerAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LedgerAccounts
    **/
    _count?: true | LedgerAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LedgerAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LedgerAccountMaxAggregateInputType
  }

  export type GetLedgerAccountAggregateType<T extends LedgerAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateLedgerAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLedgerAccount[P]>
      : GetScalarType<T[P], AggregateLedgerAccount[P]>
  }




  export type LedgerAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LedgerAccountWhereInput
    orderBy?: LedgerAccountOrderByWithAggregationInput | LedgerAccountOrderByWithAggregationInput[]
    by: LedgerAccountScalarFieldEnum[] | LedgerAccountScalarFieldEnum
    having?: LedgerAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LedgerAccountCountAggregateInputType | true
    _min?: LedgerAccountMinAggregateInputType
    _max?: LedgerAccountMaxAggregateInputType
  }

  export type LedgerAccountGroupByOutputType = {
    id: string
    name: string
    type: $Enums.AccountType
    currency: string
    status: string
    metadata: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: LedgerAccountCountAggregateOutputType | null
    _min: LedgerAccountMinAggregateOutputType | null
    _max: LedgerAccountMaxAggregateOutputType | null
  }

  type GetLedgerAccountGroupByPayload<T extends LedgerAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LedgerAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LedgerAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LedgerAccountGroupByOutputType[P]>
            : GetScalarType<T[P], LedgerAccountGroupByOutputType[P]>
        }
      >
    >


  export type LedgerAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    currency?: boolean
    status?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    entries?: boolean | LedgerAccount$entriesArgs<ExtArgs>
    _count?: boolean | LedgerAccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ledgerAccount"]>

  export type LedgerAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    currency?: boolean
    status?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ledgerAccount"]>

  export type LedgerAccountSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    currency?: boolean
    status?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LedgerAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entries?: boolean | LedgerAccount$entriesArgs<ExtArgs>
    _count?: boolean | LedgerAccountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LedgerAccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LedgerAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LedgerAccount"
    objects: {
      entries: Prisma.$LedgerEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: $Enums.AccountType
      currency: string
      status: string
      metadata: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ledgerAccount"]>
    composites: {}
  }

  type LedgerAccountGetPayload<S extends boolean | null | undefined | LedgerAccountDefaultArgs> = $Result.GetResult<Prisma.$LedgerAccountPayload, S>

  type LedgerAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LedgerAccountFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LedgerAccountCountAggregateInputType | true
    }

  export interface LedgerAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LedgerAccount'], meta: { name: 'LedgerAccount' } }
    /**
     * Find zero or one LedgerAccount that matches the filter.
     * @param {LedgerAccountFindUniqueArgs} args - Arguments to find a LedgerAccount
     * @example
     * // Get one LedgerAccount
     * const ledgerAccount = await prisma.ledgerAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LedgerAccountFindUniqueArgs>(args: SelectSubset<T, LedgerAccountFindUniqueArgs<ExtArgs>>): Prisma__LedgerAccountClient<$Result.GetResult<Prisma.$LedgerAccountPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one LedgerAccount that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LedgerAccountFindUniqueOrThrowArgs} args - Arguments to find a LedgerAccount
     * @example
     * // Get one LedgerAccount
     * const ledgerAccount = await prisma.ledgerAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LedgerAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, LedgerAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LedgerAccountClient<$Result.GetResult<Prisma.$LedgerAccountPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first LedgerAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerAccountFindFirstArgs} args - Arguments to find a LedgerAccount
     * @example
     * // Get one LedgerAccount
     * const ledgerAccount = await prisma.ledgerAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LedgerAccountFindFirstArgs>(args?: SelectSubset<T, LedgerAccountFindFirstArgs<ExtArgs>>): Prisma__LedgerAccountClient<$Result.GetResult<Prisma.$LedgerAccountPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first LedgerAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerAccountFindFirstOrThrowArgs} args - Arguments to find a LedgerAccount
     * @example
     * // Get one LedgerAccount
     * const ledgerAccount = await prisma.ledgerAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LedgerAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, LedgerAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__LedgerAccountClient<$Result.GetResult<Prisma.$LedgerAccountPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more LedgerAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LedgerAccounts
     * const ledgerAccounts = await prisma.ledgerAccount.findMany()
     * 
     * // Get first 10 LedgerAccounts
     * const ledgerAccounts = await prisma.ledgerAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ledgerAccountWithIdOnly = await prisma.ledgerAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LedgerAccountFindManyArgs>(args?: SelectSubset<T, LedgerAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LedgerAccountPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a LedgerAccount.
     * @param {LedgerAccountCreateArgs} args - Arguments to create a LedgerAccount.
     * @example
     * // Create one LedgerAccount
     * const LedgerAccount = await prisma.ledgerAccount.create({
     *   data: {
     *     // ... data to create a LedgerAccount
     *   }
     * })
     * 
     */
    create<T extends LedgerAccountCreateArgs>(args: SelectSubset<T, LedgerAccountCreateArgs<ExtArgs>>): Prisma__LedgerAccountClient<$Result.GetResult<Prisma.$LedgerAccountPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many LedgerAccounts.
     * @param {LedgerAccountCreateManyArgs} args - Arguments to create many LedgerAccounts.
     * @example
     * // Create many LedgerAccounts
     * const ledgerAccount = await prisma.ledgerAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LedgerAccountCreateManyArgs>(args?: SelectSubset<T, LedgerAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LedgerAccounts and returns the data saved in the database.
     * @param {LedgerAccountCreateManyAndReturnArgs} args - Arguments to create many LedgerAccounts.
     * @example
     * // Create many LedgerAccounts
     * const ledgerAccount = await prisma.ledgerAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LedgerAccounts and only return the `id`
     * const ledgerAccountWithIdOnly = await prisma.ledgerAccount.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LedgerAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, LedgerAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LedgerAccountPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a LedgerAccount.
     * @param {LedgerAccountDeleteArgs} args - Arguments to delete one LedgerAccount.
     * @example
     * // Delete one LedgerAccount
     * const LedgerAccount = await prisma.ledgerAccount.delete({
     *   where: {
     *     // ... filter to delete one LedgerAccount
     *   }
     * })
     * 
     */
    delete<T extends LedgerAccountDeleteArgs>(args: SelectSubset<T, LedgerAccountDeleteArgs<ExtArgs>>): Prisma__LedgerAccountClient<$Result.GetResult<Prisma.$LedgerAccountPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one LedgerAccount.
     * @param {LedgerAccountUpdateArgs} args - Arguments to update one LedgerAccount.
     * @example
     * // Update one LedgerAccount
     * const ledgerAccount = await prisma.ledgerAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LedgerAccountUpdateArgs>(args: SelectSubset<T, LedgerAccountUpdateArgs<ExtArgs>>): Prisma__LedgerAccountClient<$Result.GetResult<Prisma.$LedgerAccountPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more LedgerAccounts.
     * @param {LedgerAccountDeleteManyArgs} args - Arguments to filter LedgerAccounts to delete.
     * @example
     * // Delete a few LedgerAccounts
     * const { count } = await prisma.ledgerAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LedgerAccountDeleteManyArgs>(args?: SelectSubset<T, LedgerAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LedgerAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LedgerAccounts
     * const ledgerAccount = await prisma.ledgerAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LedgerAccountUpdateManyArgs>(args: SelectSubset<T, LedgerAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LedgerAccount.
     * @param {LedgerAccountUpsertArgs} args - Arguments to update or create a LedgerAccount.
     * @example
     * // Update or create a LedgerAccount
     * const ledgerAccount = await prisma.ledgerAccount.upsert({
     *   create: {
     *     // ... data to create a LedgerAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LedgerAccount we want to update
     *   }
     * })
     */
    upsert<T extends LedgerAccountUpsertArgs>(args: SelectSubset<T, LedgerAccountUpsertArgs<ExtArgs>>): Prisma__LedgerAccountClient<$Result.GetResult<Prisma.$LedgerAccountPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of LedgerAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerAccountCountArgs} args - Arguments to filter LedgerAccounts to count.
     * @example
     * // Count the number of LedgerAccounts
     * const count = await prisma.ledgerAccount.count({
     *   where: {
     *     // ... the filter for the LedgerAccounts we want to count
     *   }
     * })
    **/
    count<T extends LedgerAccountCountArgs>(
      args?: Subset<T, LedgerAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LedgerAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LedgerAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LedgerAccountAggregateArgs>(args: Subset<T, LedgerAccountAggregateArgs>): Prisma.PrismaPromise<GetLedgerAccountAggregateType<T>>

    /**
     * Group by LedgerAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerAccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LedgerAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LedgerAccountGroupByArgs['orderBy'] }
        : { orderBy?: LedgerAccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LedgerAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLedgerAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LedgerAccount model
   */
  readonly fields: LedgerAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LedgerAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LedgerAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    entries<T extends LedgerAccount$entriesArgs<ExtArgs> = {}>(args?: Subset<T, LedgerAccount$entriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LedgerAccount model
   */ 
  interface LedgerAccountFieldRefs {
    readonly id: FieldRef<"LedgerAccount", 'String'>
    readonly name: FieldRef<"LedgerAccount", 'String'>
    readonly type: FieldRef<"LedgerAccount", 'AccountType'>
    readonly currency: FieldRef<"LedgerAccount", 'String'>
    readonly status: FieldRef<"LedgerAccount", 'String'>
    readonly metadata: FieldRef<"LedgerAccount", 'Json'>
    readonly createdAt: FieldRef<"LedgerAccount", 'DateTime'>
    readonly updatedAt: FieldRef<"LedgerAccount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LedgerAccount findUnique
   */
  export type LedgerAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerAccount
     */
    select?: LedgerAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerAccountInclude<ExtArgs> | null
    /**
     * Filter, which LedgerAccount to fetch.
     */
    where: LedgerAccountWhereUniqueInput
  }

  /**
   * LedgerAccount findUniqueOrThrow
   */
  export type LedgerAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerAccount
     */
    select?: LedgerAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerAccountInclude<ExtArgs> | null
    /**
     * Filter, which LedgerAccount to fetch.
     */
    where: LedgerAccountWhereUniqueInput
  }

  /**
   * LedgerAccount findFirst
   */
  export type LedgerAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerAccount
     */
    select?: LedgerAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerAccountInclude<ExtArgs> | null
    /**
     * Filter, which LedgerAccount to fetch.
     */
    where?: LedgerAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LedgerAccounts to fetch.
     */
    orderBy?: LedgerAccountOrderByWithRelationInput | LedgerAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LedgerAccounts.
     */
    cursor?: LedgerAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LedgerAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LedgerAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LedgerAccounts.
     */
    distinct?: LedgerAccountScalarFieldEnum | LedgerAccountScalarFieldEnum[]
  }

  /**
   * LedgerAccount findFirstOrThrow
   */
  export type LedgerAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerAccount
     */
    select?: LedgerAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerAccountInclude<ExtArgs> | null
    /**
     * Filter, which LedgerAccount to fetch.
     */
    where?: LedgerAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LedgerAccounts to fetch.
     */
    orderBy?: LedgerAccountOrderByWithRelationInput | LedgerAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LedgerAccounts.
     */
    cursor?: LedgerAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LedgerAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LedgerAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LedgerAccounts.
     */
    distinct?: LedgerAccountScalarFieldEnum | LedgerAccountScalarFieldEnum[]
  }

  /**
   * LedgerAccount findMany
   */
  export type LedgerAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerAccount
     */
    select?: LedgerAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerAccountInclude<ExtArgs> | null
    /**
     * Filter, which LedgerAccounts to fetch.
     */
    where?: LedgerAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LedgerAccounts to fetch.
     */
    orderBy?: LedgerAccountOrderByWithRelationInput | LedgerAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LedgerAccounts.
     */
    cursor?: LedgerAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LedgerAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LedgerAccounts.
     */
    skip?: number
    distinct?: LedgerAccountScalarFieldEnum | LedgerAccountScalarFieldEnum[]
  }

  /**
   * LedgerAccount create
   */
  export type LedgerAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerAccount
     */
    select?: LedgerAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a LedgerAccount.
     */
    data: XOR<LedgerAccountCreateInput, LedgerAccountUncheckedCreateInput>
  }

  /**
   * LedgerAccount createMany
   */
  export type LedgerAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LedgerAccounts.
     */
    data: LedgerAccountCreateManyInput | LedgerAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LedgerAccount createManyAndReturn
   */
  export type LedgerAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerAccount
     */
    select?: LedgerAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many LedgerAccounts.
     */
    data: LedgerAccountCreateManyInput | LedgerAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LedgerAccount update
   */
  export type LedgerAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerAccount
     */
    select?: LedgerAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a LedgerAccount.
     */
    data: XOR<LedgerAccountUpdateInput, LedgerAccountUncheckedUpdateInput>
    /**
     * Choose, which LedgerAccount to update.
     */
    where: LedgerAccountWhereUniqueInput
  }

  /**
   * LedgerAccount updateMany
   */
  export type LedgerAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LedgerAccounts.
     */
    data: XOR<LedgerAccountUpdateManyMutationInput, LedgerAccountUncheckedUpdateManyInput>
    /**
     * Filter which LedgerAccounts to update
     */
    where?: LedgerAccountWhereInput
  }

  /**
   * LedgerAccount upsert
   */
  export type LedgerAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerAccount
     */
    select?: LedgerAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the LedgerAccount to update in case it exists.
     */
    where: LedgerAccountWhereUniqueInput
    /**
     * In case the LedgerAccount found by the `where` argument doesn't exist, create a new LedgerAccount with this data.
     */
    create: XOR<LedgerAccountCreateInput, LedgerAccountUncheckedCreateInput>
    /**
     * In case the LedgerAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LedgerAccountUpdateInput, LedgerAccountUncheckedUpdateInput>
  }

  /**
   * LedgerAccount delete
   */
  export type LedgerAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerAccount
     */
    select?: LedgerAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerAccountInclude<ExtArgs> | null
    /**
     * Filter which LedgerAccount to delete.
     */
    where: LedgerAccountWhereUniqueInput
  }

  /**
   * LedgerAccount deleteMany
   */
  export type LedgerAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LedgerAccounts to delete
     */
    where?: LedgerAccountWhereInput
  }

  /**
   * LedgerAccount.entries
   */
  export type LedgerAccount$entriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryInclude<ExtArgs> | null
    where?: LedgerEntryWhereInput
    orderBy?: LedgerEntryOrderByWithRelationInput | LedgerEntryOrderByWithRelationInput[]
    cursor?: LedgerEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LedgerEntryScalarFieldEnum | LedgerEntryScalarFieldEnum[]
  }

  /**
   * LedgerAccount without action
   */
  export type LedgerAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerAccount
     */
    select?: LedgerAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerAccountInclude<ExtArgs> | null
  }


  /**
   * Model LedgerEntry
   */

  export type AggregateLedgerEntry = {
    _count: LedgerEntryCountAggregateOutputType | null
    _avg: LedgerEntryAvgAggregateOutputType | null
    _sum: LedgerEntrySumAggregateOutputType | null
    _min: LedgerEntryMinAggregateOutputType | null
    _max: LedgerEntryMaxAggregateOutputType | null
  }

  export type LedgerEntryAvgAggregateOutputType = {
    amount: number | null
  }

  export type LedgerEntrySumAggregateOutputType = {
    amount: bigint | null
  }

  export type LedgerEntryMinAggregateOutputType = {
    id: string | null
    transactionId: string | null
    accountId: string | null
    amount: bigint | null
    currency: string | null
    description: string | null
    createdAt: Date | null
  }

  export type LedgerEntryMaxAggregateOutputType = {
    id: string | null
    transactionId: string | null
    accountId: string | null
    amount: bigint | null
    currency: string | null
    description: string | null
    createdAt: Date | null
  }

  export type LedgerEntryCountAggregateOutputType = {
    id: number
    transactionId: number
    accountId: number
    amount: number
    currency: number
    description: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type LedgerEntryAvgAggregateInputType = {
    amount?: true
  }

  export type LedgerEntrySumAggregateInputType = {
    amount?: true
  }

  export type LedgerEntryMinAggregateInputType = {
    id?: true
    transactionId?: true
    accountId?: true
    amount?: true
    currency?: true
    description?: true
    createdAt?: true
  }

  export type LedgerEntryMaxAggregateInputType = {
    id?: true
    transactionId?: true
    accountId?: true
    amount?: true
    currency?: true
    description?: true
    createdAt?: true
  }

  export type LedgerEntryCountAggregateInputType = {
    id?: true
    transactionId?: true
    accountId?: true
    amount?: true
    currency?: true
    description?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type LedgerEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LedgerEntry to aggregate.
     */
    where?: LedgerEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LedgerEntries to fetch.
     */
    orderBy?: LedgerEntryOrderByWithRelationInput | LedgerEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LedgerEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LedgerEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LedgerEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LedgerEntries
    **/
    _count?: true | LedgerEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LedgerEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LedgerEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LedgerEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LedgerEntryMaxAggregateInputType
  }

  export type GetLedgerEntryAggregateType<T extends LedgerEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateLedgerEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLedgerEntry[P]>
      : GetScalarType<T[P], AggregateLedgerEntry[P]>
  }




  export type LedgerEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LedgerEntryWhereInput
    orderBy?: LedgerEntryOrderByWithAggregationInput | LedgerEntryOrderByWithAggregationInput[]
    by: LedgerEntryScalarFieldEnum[] | LedgerEntryScalarFieldEnum
    having?: LedgerEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LedgerEntryCountAggregateInputType | true
    _avg?: LedgerEntryAvgAggregateInputType
    _sum?: LedgerEntrySumAggregateInputType
    _min?: LedgerEntryMinAggregateInputType
    _max?: LedgerEntryMaxAggregateInputType
  }

  export type LedgerEntryGroupByOutputType = {
    id: string
    transactionId: string
    accountId: string
    amount: bigint
    currency: string
    description: string | null
    metadata: JsonValue | null
    createdAt: Date
    _count: LedgerEntryCountAggregateOutputType | null
    _avg: LedgerEntryAvgAggregateOutputType | null
    _sum: LedgerEntrySumAggregateOutputType | null
    _min: LedgerEntryMinAggregateOutputType | null
    _max: LedgerEntryMaxAggregateOutputType | null
  }

  type GetLedgerEntryGroupByPayload<T extends LedgerEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LedgerEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LedgerEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LedgerEntryGroupByOutputType[P]>
            : GetScalarType<T[P], LedgerEntryGroupByOutputType[P]>
        }
      >
    >


  export type LedgerEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transactionId?: boolean
    accountId?: boolean
    amount?: boolean
    currency?: boolean
    description?: boolean
    metadata?: boolean
    createdAt?: boolean
    account?: boolean | LedgerAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ledgerEntry"]>

  export type LedgerEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transactionId?: boolean
    accountId?: boolean
    amount?: boolean
    currency?: boolean
    description?: boolean
    metadata?: boolean
    createdAt?: boolean
    account?: boolean | LedgerAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ledgerEntry"]>

  export type LedgerEntrySelectScalar = {
    id?: boolean
    transactionId?: boolean
    accountId?: boolean
    amount?: boolean
    currency?: boolean
    description?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type LedgerEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | LedgerAccountDefaultArgs<ExtArgs>
  }
  export type LedgerEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | LedgerAccountDefaultArgs<ExtArgs>
  }

  export type $LedgerEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LedgerEntry"
    objects: {
      account: Prisma.$LedgerAccountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      transactionId: string
      accountId: string
      amount: bigint
      currency: string
      description: string | null
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["ledgerEntry"]>
    composites: {}
  }

  type LedgerEntryGetPayload<S extends boolean | null | undefined | LedgerEntryDefaultArgs> = $Result.GetResult<Prisma.$LedgerEntryPayload, S>

  type LedgerEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LedgerEntryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LedgerEntryCountAggregateInputType | true
    }

  export interface LedgerEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LedgerEntry'], meta: { name: 'LedgerEntry' } }
    /**
     * Find zero or one LedgerEntry that matches the filter.
     * @param {LedgerEntryFindUniqueArgs} args - Arguments to find a LedgerEntry
     * @example
     * // Get one LedgerEntry
     * const ledgerEntry = await prisma.ledgerEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LedgerEntryFindUniqueArgs>(args: SelectSubset<T, LedgerEntryFindUniqueArgs<ExtArgs>>): Prisma__LedgerEntryClient<$Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one LedgerEntry that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LedgerEntryFindUniqueOrThrowArgs} args - Arguments to find a LedgerEntry
     * @example
     * // Get one LedgerEntry
     * const ledgerEntry = await prisma.ledgerEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LedgerEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, LedgerEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LedgerEntryClient<$Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first LedgerEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerEntryFindFirstArgs} args - Arguments to find a LedgerEntry
     * @example
     * // Get one LedgerEntry
     * const ledgerEntry = await prisma.ledgerEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LedgerEntryFindFirstArgs>(args?: SelectSubset<T, LedgerEntryFindFirstArgs<ExtArgs>>): Prisma__LedgerEntryClient<$Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first LedgerEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerEntryFindFirstOrThrowArgs} args - Arguments to find a LedgerEntry
     * @example
     * // Get one LedgerEntry
     * const ledgerEntry = await prisma.ledgerEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LedgerEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, LedgerEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__LedgerEntryClient<$Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more LedgerEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LedgerEntries
     * const ledgerEntries = await prisma.ledgerEntry.findMany()
     * 
     * // Get first 10 LedgerEntries
     * const ledgerEntries = await prisma.ledgerEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ledgerEntryWithIdOnly = await prisma.ledgerEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LedgerEntryFindManyArgs>(args?: SelectSubset<T, LedgerEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a LedgerEntry.
     * @param {LedgerEntryCreateArgs} args - Arguments to create a LedgerEntry.
     * @example
     * // Create one LedgerEntry
     * const LedgerEntry = await prisma.ledgerEntry.create({
     *   data: {
     *     // ... data to create a LedgerEntry
     *   }
     * })
     * 
     */
    create<T extends LedgerEntryCreateArgs>(args: SelectSubset<T, LedgerEntryCreateArgs<ExtArgs>>): Prisma__LedgerEntryClient<$Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many LedgerEntries.
     * @param {LedgerEntryCreateManyArgs} args - Arguments to create many LedgerEntries.
     * @example
     * // Create many LedgerEntries
     * const ledgerEntry = await prisma.ledgerEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LedgerEntryCreateManyArgs>(args?: SelectSubset<T, LedgerEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LedgerEntries and returns the data saved in the database.
     * @param {LedgerEntryCreateManyAndReturnArgs} args - Arguments to create many LedgerEntries.
     * @example
     * // Create many LedgerEntries
     * const ledgerEntry = await prisma.ledgerEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LedgerEntries and only return the `id`
     * const ledgerEntryWithIdOnly = await prisma.ledgerEntry.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LedgerEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, LedgerEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a LedgerEntry.
     * @param {LedgerEntryDeleteArgs} args - Arguments to delete one LedgerEntry.
     * @example
     * // Delete one LedgerEntry
     * const LedgerEntry = await prisma.ledgerEntry.delete({
     *   where: {
     *     // ... filter to delete one LedgerEntry
     *   }
     * })
     * 
     */
    delete<T extends LedgerEntryDeleteArgs>(args: SelectSubset<T, LedgerEntryDeleteArgs<ExtArgs>>): Prisma__LedgerEntryClient<$Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one LedgerEntry.
     * @param {LedgerEntryUpdateArgs} args - Arguments to update one LedgerEntry.
     * @example
     * // Update one LedgerEntry
     * const ledgerEntry = await prisma.ledgerEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LedgerEntryUpdateArgs>(args: SelectSubset<T, LedgerEntryUpdateArgs<ExtArgs>>): Prisma__LedgerEntryClient<$Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more LedgerEntries.
     * @param {LedgerEntryDeleteManyArgs} args - Arguments to filter LedgerEntries to delete.
     * @example
     * // Delete a few LedgerEntries
     * const { count } = await prisma.ledgerEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LedgerEntryDeleteManyArgs>(args?: SelectSubset<T, LedgerEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LedgerEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LedgerEntries
     * const ledgerEntry = await prisma.ledgerEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LedgerEntryUpdateManyArgs>(args: SelectSubset<T, LedgerEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LedgerEntry.
     * @param {LedgerEntryUpsertArgs} args - Arguments to update or create a LedgerEntry.
     * @example
     * // Update or create a LedgerEntry
     * const ledgerEntry = await prisma.ledgerEntry.upsert({
     *   create: {
     *     // ... data to create a LedgerEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LedgerEntry we want to update
     *   }
     * })
     */
    upsert<T extends LedgerEntryUpsertArgs>(args: SelectSubset<T, LedgerEntryUpsertArgs<ExtArgs>>): Prisma__LedgerEntryClient<$Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of LedgerEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerEntryCountArgs} args - Arguments to filter LedgerEntries to count.
     * @example
     * // Count the number of LedgerEntries
     * const count = await prisma.ledgerEntry.count({
     *   where: {
     *     // ... the filter for the LedgerEntries we want to count
     *   }
     * })
    **/
    count<T extends LedgerEntryCountArgs>(
      args?: Subset<T, LedgerEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LedgerEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LedgerEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LedgerEntryAggregateArgs>(args: Subset<T, LedgerEntryAggregateArgs>): Prisma.PrismaPromise<GetLedgerEntryAggregateType<T>>

    /**
     * Group by LedgerEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerEntryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LedgerEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LedgerEntryGroupByArgs['orderBy'] }
        : { orderBy?: LedgerEntryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LedgerEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLedgerEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LedgerEntry model
   */
  readonly fields: LedgerEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LedgerEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LedgerEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends LedgerAccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LedgerAccountDefaultArgs<ExtArgs>>): Prisma__LedgerAccountClient<$Result.GetResult<Prisma.$LedgerAccountPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LedgerEntry model
   */ 
  interface LedgerEntryFieldRefs {
    readonly id: FieldRef<"LedgerEntry", 'String'>
    readonly transactionId: FieldRef<"LedgerEntry", 'String'>
    readonly accountId: FieldRef<"LedgerEntry", 'String'>
    readonly amount: FieldRef<"LedgerEntry", 'BigInt'>
    readonly currency: FieldRef<"LedgerEntry", 'String'>
    readonly description: FieldRef<"LedgerEntry", 'String'>
    readonly metadata: FieldRef<"LedgerEntry", 'Json'>
    readonly createdAt: FieldRef<"LedgerEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LedgerEntry findUnique
   */
  export type LedgerEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryInclude<ExtArgs> | null
    /**
     * Filter, which LedgerEntry to fetch.
     */
    where: LedgerEntryWhereUniqueInput
  }

  /**
   * LedgerEntry findUniqueOrThrow
   */
  export type LedgerEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryInclude<ExtArgs> | null
    /**
     * Filter, which LedgerEntry to fetch.
     */
    where: LedgerEntryWhereUniqueInput
  }

  /**
   * LedgerEntry findFirst
   */
  export type LedgerEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryInclude<ExtArgs> | null
    /**
     * Filter, which LedgerEntry to fetch.
     */
    where?: LedgerEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LedgerEntries to fetch.
     */
    orderBy?: LedgerEntryOrderByWithRelationInput | LedgerEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LedgerEntries.
     */
    cursor?: LedgerEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LedgerEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LedgerEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LedgerEntries.
     */
    distinct?: LedgerEntryScalarFieldEnum | LedgerEntryScalarFieldEnum[]
  }

  /**
   * LedgerEntry findFirstOrThrow
   */
  export type LedgerEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryInclude<ExtArgs> | null
    /**
     * Filter, which LedgerEntry to fetch.
     */
    where?: LedgerEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LedgerEntries to fetch.
     */
    orderBy?: LedgerEntryOrderByWithRelationInput | LedgerEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LedgerEntries.
     */
    cursor?: LedgerEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LedgerEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LedgerEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LedgerEntries.
     */
    distinct?: LedgerEntryScalarFieldEnum | LedgerEntryScalarFieldEnum[]
  }

  /**
   * LedgerEntry findMany
   */
  export type LedgerEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryInclude<ExtArgs> | null
    /**
     * Filter, which LedgerEntries to fetch.
     */
    where?: LedgerEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LedgerEntries to fetch.
     */
    orderBy?: LedgerEntryOrderByWithRelationInput | LedgerEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LedgerEntries.
     */
    cursor?: LedgerEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LedgerEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LedgerEntries.
     */
    skip?: number
    distinct?: LedgerEntryScalarFieldEnum | LedgerEntryScalarFieldEnum[]
  }

  /**
   * LedgerEntry create
   */
  export type LedgerEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a LedgerEntry.
     */
    data: XOR<LedgerEntryCreateInput, LedgerEntryUncheckedCreateInput>
  }

  /**
   * LedgerEntry createMany
   */
  export type LedgerEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LedgerEntries.
     */
    data: LedgerEntryCreateManyInput | LedgerEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LedgerEntry createManyAndReturn
   */
  export type LedgerEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many LedgerEntries.
     */
    data: LedgerEntryCreateManyInput | LedgerEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LedgerEntry update
   */
  export type LedgerEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a LedgerEntry.
     */
    data: XOR<LedgerEntryUpdateInput, LedgerEntryUncheckedUpdateInput>
    /**
     * Choose, which LedgerEntry to update.
     */
    where: LedgerEntryWhereUniqueInput
  }

  /**
   * LedgerEntry updateMany
   */
  export type LedgerEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LedgerEntries.
     */
    data: XOR<LedgerEntryUpdateManyMutationInput, LedgerEntryUncheckedUpdateManyInput>
    /**
     * Filter which LedgerEntries to update
     */
    where?: LedgerEntryWhereInput
  }

  /**
   * LedgerEntry upsert
   */
  export type LedgerEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the LedgerEntry to update in case it exists.
     */
    where: LedgerEntryWhereUniqueInput
    /**
     * In case the LedgerEntry found by the `where` argument doesn't exist, create a new LedgerEntry with this data.
     */
    create: XOR<LedgerEntryCreateInput, LedgerEntryUncheckedCreateInput>
    /**
     * In case the LedgerEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LedgerEntryUpdateInput, LedgerEntryUncheckedUpdateInput>
  }

  /**
   * LedgerEntry delete
   */
  export type LedgerEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryInclude<ExtArgs> | null
    /**
     * Filter which LedgerEntry to delete.
     */
    where: LedgerEntryWhereUniqueInput
  }

  /**
   * LedgerEntry deleteMany
   */
  export type LedgerEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LedgerEntries to delete
     */
    where?: LedgerEntryWhereInput
  }

  /**
   * LedgerEntry without action
   */
  export type LedgerEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntry
     */
    select?: LedgerEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntryInclude<ExtArgs> | null
  }


  /**
   * Model IdempotencyKey
   */

  export type AggregateIdempotencyKey = {
    _count: IdempotencyKeyCountAggregateOutputType | null
    _avg: IdempotencyKeyAvgAggregateOutputType | null
    _sum: IdempotencyKeySumAggregateOutputType | null
    _min: IdempotencyKeyMinAggregateOutputType | null
    _max: IdempotencyKeyMaxAggregateOutputType | null
  }

  export type IdempotencyKeyAvgAggregateOutputType = {
    statusCode: number | null
  }

  export type IdempotencyKeySumAggregateOutputType = {
    statusCode: number | null
  }

  export type IdempotencyKeyMinAggregateOutputType = {
    key: string | null
    statusCode: number | null
    createdAt: Date | null
  }

  export type IdempotencyKeyMaxAggregateOutputType = {
    key: string | null
    statusCode: number | null
    createdAt: Date | null
  }

  export type IdempotencyKeyCountAggregateOutputType = {
    key: number
    responseBody: number
    statusCode: number
    createdAt: number
    _all: number
  }


  export type IdempotencyKeyAvgAggregateInputType = {
    statusCode?: true
  }

  export type IdempotencyKeySumAggregateInputType = {
    statusCode?: true
  }

  export type IdempotencyKeyMinAggregateInputType = {
    key?: true
    statusCode?: true
    createdAt?: true
  }

  export type IdempotencyKeyMaxAggregateInputType = {
    key?: true
    statusCode?: true
    createdAt?: true
  }

  export type IdempotencyKeyCountAggregateInputType = {
    key?: true
    responseBody?: true
    statusCode?: true
    createdAt?: true
    _all?: true
  }

  export type IdempotencyKeyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IdempotencyKey to aggregate.
     */
    where?: IdempotencyKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdempotencyKeys to fetch.
     */
    orderBy?: IdempotencyKeyOrderByWithRelationInput | IdempotencyKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IdempotencyKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdempotencyKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdempotencyKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IdempotencyKeys
    **/
    _count?: true | IdempotencyKeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IdempotencyKeyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IdempotencyKeySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IdempotencyKeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IdempotencyKeyMaxAggregateInputType
  }

  export type GetIdempotencyKeyAggregateType<T extends IdempotencyKeyAggregateArgs> = {
        [P in keyof T & keyof AggregateIdempotencyKey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIdempotencyKey[P]>
      : GetScalarType<T[P], AggregateIdempotencyKey[P]>
  }




  export type IdempotencyKeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IdempotencyKeyWhereInput
    orderBy?: IdempotencyKeyOrderByWithAggregationInput | IdempotencyKeyOrderByWithAggregationInput[]
    by: IdempotencyKeyScalarFieldEnum[] | IdempotencyKeyScalarFieldEnum
    having?: IdempotencyKeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IdempotencyKeyCountAggregateInputType | true
    _avg?: IdempotencyKeyAvgAggregateInputType
    _sum?: IdempotencyKeySumAggregateInputType
    _min?: IdempotencyKeyMinAggregateInputType
    _max?: IdempotencyKeyMaxAggregateInputType
  }

  export type IdempotencyKeyGroupByOutputType = {
    key: string
    responseBody: JsonValue
    statusCode: number
    createdAt: Date
    _count: IdempotencyKeyCountAggregateOutputType | null
    _avg: IdempotencyKeyAvgAggregateOutputType | null
    _sum: IdempotencyKeySumAggregateOutputType | null
    _min: IdempotencyKeyMinAggregateOutputType | null
    _max: IdempotencyKeyMaxAggregateOutputType | null
  }

  type GetIdempotencyKeyGroupByPayload<T extends IdempotencyKeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IdempotencyKeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IdempotencyKeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IdempotencyKeyGroupByOutputType[P]>
            : GetScalarType<T[P], IdempotencyKeyGroupByOutputType[P]>
        }
      >
    >


  export type IdempotencyKeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    responseBody?: boolean
    statusCode?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["idempotencyKey"]>

  export type IdempotencyKeySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    responseBody?: boolean
    statusCode?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["idempotencyKey"]>

  export type IdempotencyKeySelectScalar = {
    key?: boolean
    responseBody?: boolean
    statusCode?: boolean
    createdAt?: boolean
  }


  export type $IdempotencyKeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IdempotencyKey"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      key: string
      responseBody: Prisma.JsonValue
      statusCode: number
      createdAt: Date
    }, ExtArgs["result"]["idempotencyKey"]>
    composites: {}
  }

  type IdempotencyKeyGetPayload<S extends boolean | null | undefined | IdempotencyKeyDefaultArgs> = $Result.GetResult<Prisma.$IdempotencyKeyPayload, S>

  type IdempotencyKeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<IdempotencyKeyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: IdempotencyKeyCountAggregateInputType | true
    }

  export interface IdempotencyKeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IdempotencyKey'], meta: { name: 'IdempotencyKey' } }
    /**
     * Find zero or one IdempotencyKey that matches the filter.
     * @param {IdempotencyKeyFindUniqueArgs} args - Arguments to find a IdempotencyKey
     * @example
     * // Get one IdempotencyKey
     * const idempotencyKey = await prisma.idempotencyKey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IdempotencyKeyFindUniqueArgs>(args: SelectSubset<T, IdempotencyKeyFindUniqueArgs<ExtArgs>>): Prisma__IdempotencyKeyClient<$Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one IdempotencyKey that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {IdempotencyKeyFindUniqueOrThrowArgs} args - Arguments to find a IdempotencyKey
     * @example
     * // Get one IdempotencyKey
     * const idempotencyKey = await prisma.idempotencyKey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IdempotencyKeyFindUniqueOrThrowArgs>(args: SelectSubset<T, IdempotencyKeyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IdempotencyKeyClient<$Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first IdempotencyKey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdempotencyKeyFindFirstArgs} args - Arguments to find a IdempotencyKey
     * @example
     * // Get one IdempotencyKey
     * const idempotencyKey = await prisma.idempotencyKey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IdempotencyKeyFindFirstArgs>(args?: SelectSubset<T, IdempotencyKeyFindFirstArgs<ExtArgs>>): Prisma__IdempotencyKeyClient<$Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first IdempotencyKey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdempotencyKeyFindFirstOrThrowArgs} args - Arguments to find a IdempotencyKey
     * @example
     * // Get one IdempotencyKey
     * const idempotencyKey = await prisma.idempotencyKey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IdempotencyKeyFindFirstOrThrowArgs>(args?: SelectSubset<T, IdempotencyKeyFindFirstOrThrowArgs<ExtArgs>>): Prisma__IdempotencyKeyClient<$Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more IdempotencyKeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdempotencyKeyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IdempotencyKeys
     * const idempotencyKeys = await prisma.idempotencyKey.findMany()
     * 
     * // Get first 10 IdempotencyKeys
     * const idempotencyKeys = await prisma.idempotencyKey.findMany({ take: 10 })
     * 
     * // Only select the `key`
     * const idempotencyKeyWithKeyOnly = await prisma.idempotencyKey.findMany({ select: { key: true } })
     * 
     */
    findMany<T extends IdempotencyKeyFindManyArgs>(args?: SelectSubset<T, IdempotencyKeyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a IdempotencyKey.
     * @param {IdempotencyKeyCreateArgs} args - Arguments to create a IdempotencyKey.
     * @example
     * // Create one IdempotencyKey
     * const IdempotencyKey = await prisma.idempotencyKey.create({
     *   data: {
     *     // ... data to create a IdempotencyKey
     *   }
     * })
     * 
     */
    create<T extends IdempotencyKeyCreateArgs>(args: SelectSubset<T, IdempotencyKeyCreateArgs<ExtArgs>>): Prisma__IdempotencyKeyClient<$Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many IdempotencyKeys.
     * @param {IdempotencyKeyCreateManyArgs} args - Arguments to create many IdempotencyKeys.
     * @example
     * // Create many IdempotencyKeys
     * const idempotencyKey = await prisma.idempotencyKey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IdempotencyKeyCreateManyArgs>(args?: SelectSubset<T, IdempotencyKeyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IdempotencyKeys and returns the data saved in the database.
     * @param {IdempotencyKeyCreateManyAndReturnArgs} args - Arguments to create many IdempotencyKeys.
     * @example
     * // Create many IdempotencyKeys
     * const idempotencyKey = await prisma.idempotencyKey.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IdempotencyKeys and only return the `key`
     * const idempotencyKeyWithKeyOnly = await prisma.idempotencyKey.createManyAndReturn({ 
     *   select: { key: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IdempotencyKeyCreateManyAndReturnArgs>(args?: SelectSubset<T, IdempotencyKeyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a IdempotencyKey.
     * @param {IdempotencyKeyDeleteArgs} args - Arguments to delete one IdempotencyKey.
     * @example
     * // Delete one IdempotencyKey
     * const IdempotencyKey = await prisma.idempotencyKey.delete({
     *   where: {
     *     // ... filter to delete one IdempotencyKey
     *   }
     * })
     * 
     */
    delete<T extends IdempotencyKeyDeleteArgs>(args: SelectSubset<T, IdempotencyKeyDeleteArgs<ExtArgs>>): Prisma__IdempotencyKeyClient<$Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one IdempotencyKey.
     * @param {IdempotencyKeyUpdateArgs} args - Arguments to update one IdempotencyKey.
     * @example
     * // Update one IdempotencyKey
     * const idempotencyKey = await prisma.idempotencyKey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IdempotencyKeyUpdateArgs>(args: SelectSubset<T, IdempotencyKeyUpdateArgs<ExtArgs>>): Prisma__IdempotencyKeyClient<$Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more IdempotencyKeys.
     * @param {IdempotencyKeyDeleteManyArgs} args - Arguments to filter IdempotencyKeys to delete.
     * @example
     * // Delete a few IdempotencyKeys
     * const { count } = await prisma.idempotencyKey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IdempotencyKeyDeleteManyArgs>(args?: SelectSubset<T, IdempotencyKeyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IdempotencyKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdempotencyKeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IdempotencyKeys
     * const idempotencyKey = await prisma.idempotencyKey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IdempotencyKeyUpdateManyArgs>(args: SelectSubset<T, IdempotencyKeyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one IdempotencyKey.
     * @param {IdempotencyKeyUpsertArgs} args - Arguments to update or create a IdempotencyKey.
     * @example
     * // Update or create a IdempotencyKey
     * const idempotencyKey = await prisma.idempotencyKey.upsert({
     *   create: {
     *     // ... data to create a IdempotencyKey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IdempotencyKey we want to update
     *   }
     * })
     */
    upsert<T extends IdempotencyKeyUpsertArgs>(args: SelectSubset<T, IdempotencyKeyUpsertArgs<ExtArgs>>): Prisma__IdempotencyKeyClient<$Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of IdempotencyKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdempotencyKeyCountArgs} args - Arguments to filter IdempotencyKeys to count.
     * @example
     * // Count the number of IdempotencyKeys
     * const count = await prisma.idempotencyKey.count({
     *   where: {
     *     // ... the filter for the IdempotencyKeys we want to count
     *   }
     * })
    **/
    count<T extends IdempotencyKeyCountArgs>(
      args?: Subset<T, IdempotencyKeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IdempotencyKeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IdempotencyKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdempotencyKeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IdempotencyKeyAggregateArgs>(args: Subset<T, IdempotencyKeyAggregateArgs>): Prisma.PrismaPromise<GetIdempotencyKeyAggregateType<T>>

    /**
     * Group by IdempotencyKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdempotencyKeyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IdempotencyKeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IdempotencyKeyGroupByArgs['orderBy'] }
        : { orderBy?: IdempotencyKeyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IdempotencyKeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIdempotencyKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IdempotencyKey model
   */
  readonly fields: IdempotencyKeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IdempotencyKey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IdempotencyKeyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the IdempotencyKey model
   */ 
  interface IdempotencyKeyFieldRefs {
    readonly key: FieldRef<"IdempotencyKey", 'String'>
    readonly responseBody: FieldRef<"IdempotencyKey", 'Json'>
    readonly statusCode: FieldRef<"IdempotencyKey", 'Int'>
    readonly createdAt: FieldRef<"IdempotencyKey", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IdempotencyKey findUnique
   */
  export type IdempotencyKeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdempotencyKey
     */
    select?: IdempotencyKeySelect<ExtArgs> | null
    /**
     * Filter, which IdempotencyKey to fetch.
     */
    where: IdempotencyKeyWhereUniqueInput
  }

  /**
   * IdempotencyKey findUniqueOrThrow
   */
  export type IdempotencyKeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdempotencyKey
     */
    select?: IdempotencyKeySelect<ExtArgs> | null
    /**
     * Filter, which IdempotencyKey to fetch.
     */
    where: IdempotencyKeyWhereUniqueInput
  }

  /**
   * IdempotencyKey findFirst
   */
  export type IdempotencyKeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdempotencyKey
     */
    select?: IdempotencyKeySelect<ExtArgs> | null
    /**
     * Filter, which IdempotencyKey to fetch.
     */
    where?: IdempotencyKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdempotencyKeys to fetch.
     */
    orderBy?: IdempotencyKeyOrderByWithRelationInput | IdempotencyKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IdempotencyKeys.
     */
    cursor?: IdempotencyKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdempotencyKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdempotencyKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IdempotencyKeys.
     */
    distinct?: IdempotencyKeyScalarFieldEnum | IdempotencyKeyScalarFieldEnum[]
  }

  /**
   * IdempotencyKey findFirstOrThrow
   */
  export type IdempotencyKeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdempotencyKey
     */
    select?: IdempotencyKeySelect<ExtArgs> | null
    /**
     * Filter, which IdempotencyKey to fetch.
     */
    where?: IdempotencyKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdempotencyKeys to fetch.
     */
    orderBy?: IdempotencyKeyOrderByWithRelationInput | IdempotencyKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IdempotencyKeys.
     */
    cursor?: IdempotencyKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdempotencyKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdempotencyKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IdempotencyKeys.
     */
    distinct?: IdempotencyKeyScalarFieldEnum | IdempotencyKeyScalarFieldEnum[]
  }

  /**
   * IdempotencyKey findMany
   */
  export type IdempotencyKeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdempotencyKey
     */
    select?: IdempotencyKeySelect<ExtArgs> | null
    /**
     * Filter, which IdempotencyKeys to fetch.
     */
    where?: IdempotencyKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdempotencyKeys to fetch.
     */
    orderBy?: IdempotencyKeyOrderByWithRelationInput | IdempotencyKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IdempotencyKeys.
     */
    cursor?: IdempotencyKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdempotencyKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdempotencyKeys.
     */
    skip?: number
    distinct?: IdempotencyKeyScalarFieldEnum | IdempotencyKeyScalarFieldEnum[]
  }

  /**
   * IdempotencyKey create
   */
  export type IdempotencyKeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdempotencyKey
     */
    select?: IdempotencyKeySelect<ExtArgs> | null
    /**
     * The data needed to create a IdempotencyKey.
     */
    data: XOR<IdempotencyKeyCreateInput, IdempotencyKeyUncheckedCreateInput>
  }

  /**
   * IdempotencyKey createMany
   */
  export type IdempotencyKeyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IdempotencyKeys.
     */
    data: IdempotencyKeyCreateManyInput | IdempotencyKeyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IdempotencyKey createManyAndReturn
   */
  export type IdempotencyKeyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdempotencyKey
     */
    select?: IdempotencyKeySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many IdempotencyKeys.
     */
    data: IdempotencyKeyCreateManyInput | IdempotencyKeyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IdempotencyKey update
   */
  export type IdempotencyKeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdempotencyKey
     */
    select?: IdempotencyKeySelect<ExtArgs> | null
    /**
     * The data needed to update a IdempotencyKey.
     */
    data: XOR<IdempotencyKeyUpdateInput, IdempotencyKeyUncheckedUpdateInput>
    /**
     * Choose, which IdempotencyKey to update.
     */
    where: IdempotencyKeyWhereUniqueInput
  }

  /**
   * IdempotencyKey updateMany
   */
  export type IdempotencyKeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IdempotencyKeys.
     */
    data: XOR<IdempotencyKeyUpdateManyMutationInput, IdempotencyKeyUncheckedUpdateManyInput>
    /**
     * Filter which IdempotencyKeys to update
     */
    where?: IdempotencyKeyWhereInput
  }

  /**
   * IdempotencyKey upsert
   */
  export type IdempotencyKeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdempotencyKey
     */
    select?: IdempotencyKeySelect<ExtArgs> | null
    /**
     * The filter to search for the IdempotencyKey to update in case it exists.
     */
    where: IdempotencyKeyWhereUniqueInput
    /**
     * In case the IdempotencyKey found by the `where` argument doesn't exist, create a new IdempotencyKey with this data.
     */
    create: XOR<IdempotencyKeyCreateInput, IdempotencyKeyUncheckedCreateInput>
    /**
     * In case the IdempotencyKey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IdempotencyKeyUpdateInput, IdempotencyKeyUncheckedUpdateInput>
  }

  /**
   * IdempotencyKey delete
   */
  export type IdempotencyKeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdempotencyKey
     */
    select?: IdempotencyKeySelect<ExtArgs> | null
    /**
     * Filter which IdempotencyKey to delete.
     */
    where: IdempotencyKeyWhereUniqueInput
  }

  /**
   * IdempotencyKey deleteMany
   */
  export type IdempotencyKeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IdempotencyKeys to delete
     */
    where?: IdempotencyKeyWhereInput
  }

  /**
   * IdempotencyKey without action
   */
  export type IdempotencyKeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdempotencyKey
     */
    select?: IdempotencyKeySelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const LedgerAccountScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    currency: 'currency',
    status: 'status',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LedgerAccountScalarFieldEnum = (typeof LedgerAccountScalarFieldEnum)[keyof typeof LedgerAccountScalarFieldEnum]


  export const LedgerEntryScalarFieldEnum: {
    id: 'id',
    transactionId: 'transactionId',
    accountId: 'accountId',
    amount: 'amount',
    currency: 'currency',
    description: 'description',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type LedgerEntryScalarFieldEnum = (typeof LedgerEntryScalarFieldEnum)[keyof typeof LedgerEntryScalarFieldEnum]


  export const IdempotencyKeyScalarFieldEnum: {
    key: 'key',
    responseBody: 'responseBody',
    statusCode: 'statusCode',
    createdAt: 'createdAt'
  };

  export type IdempotencyKeyScalarFieldEnum = (typeof IdempotencyKeyScalarFieldEnum)[keyof typeof IdempotencyKeyScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'AccountType'
   */
  export type EnumAccountTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountType'>
    


  /**
   * Reference to a field of type 'AccountType[]'
   */
  export type ListEnumAccountTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type LedgerAccountWhereInput = {
    AND?: LedgerAccountWhereInput | LedgerAccountWhereInput[]
    OR?: LedgerAccountWhereInput[]
    NOT?: LedgerAccountWhereInput | LedgerAccountWhereInput[]
    id?: StringFilter<"LedgerAccount"> | string
    name?: StringFilter<"LedgerAccount"> | string
    type?: EnumAccountTypeFilter<"LedgerAccount"> | $Enums.AccountType
    currency?: StringFilter<"LedgerAccount"> | string
    status?: StringFilter<"LedgerAccount"> | string
    metadata?: JsonNullableFilter<"LedgerAccount">
    createdAt?: DateTimeFilter<"LedgerAccount"> | Date | string
    updatedAt?: DateTimeFilter<"LedgerAccount"> | Date | string
    entries?: LedgerEntryListRelationFilter
  }

  export type LedgerAccountOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    entries?: LedgerEntryOrderByRelationAggregateInput
  }

  export type LedgerAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LedgerAccountWhereInput | LedgerAccountWhereInput[]
    OR?: LedgerAccountWhereInput[]
    NOT?: LedgerAccountWhereInput | LedgerAccountWhereInput[]
    name?: StringFilter<"LedgerAccount"> | string
    type?: EnumAccountTypeFilter<"LedgerAccount"> | $Enums.AccountType
    currency?: StringFilter<"LedgerAccount"> | string
    status?: StringFilter<"LedgerAccount"> | string
    metadata?: JsonNullableFilter<"LedgerAccount">
    createdAt?: DateTimeFilter<"LedgerAccount"> | Date | string
    updatedAt?: DateTimeFilter<"LedgerAccount"> | Date | string
    entries?: LedgerEntryListRelationFilter
  }, "id">

  export type LedgerAccountOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LedgerAccountCountOrderByAggregateInput
    _max?: LedgerAccountMaxOrderByAggregateInput
    _min?: LedgerAccountMinOrderByAggregateInput
  }

  export type LedgerAccountScalarWhereWithAggregatesInput = {
    AND?: LedgerAccountScalarWhereWithAggregatesInput | LedgerAccountScalarWhereWithAggregatesInput[]
    OR?: LedgerAccountScalarWhereWithAggregatesInput[]
    NOT?: LedgerAccountScalarWhereWithAggregatesInput | LedgerAccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LedgerAccount"> | string
    name?: StringWithAggregatesFilter<"LedgerAccount"> | string
    type?: EnumAccountTypeWithAggregatesFilter<"LedgerAccount"> | $Enums.AccountType
    currency?: StringWithAggregatesFilter<"LedgerAccount"> | string
    status?: StringWithAggregatesFilter<"LedgerAccount"> | string
    metadata?: JsonNullableWithAggregatesFilter<"LedgerAccount">
    createdAt?: DateTimeWithAggregatesFilter<"LedgerAccount"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LedgerAccount"> | Date | string
  }

  export type LedgerEntryWhereInput = {
    AND?: LedgerEntryWhereInput | LedgerEntryWhereInput[]
    OR?: LedgerEntryWhereInput[]
    NOT?: LedgerEntryWhereInput | LedgerEntryWhereInput[]
    id?: StringFilter<"LedgerEntry"> | string
    transactionId?: StringFilter<"LedgerEntry"> | string
    accountId?: StringFilter<"LedgerEntry"> | string
    amount?: BigIntFilter<"LedgerEntry"> | bigint | number
    currency?: StringFilter<"LedgerEntry"> | string
    description?: StringNullableFilter<"LedgerEntry"> | string | null
    metadata?: JsonNullableFilter<"LedgerEntry">
    createdAt?: DateTimeFilter<"LedgerEntry"> | Date | string
    account?: XOR<LedgerAccountRelationFilter, LedgerAccountWhereInput>
  }

  export type LedgerEntryOrderByWithRelationInput = {
    id?: SortOrder
    transactionId?: SortOrder
    accountId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    description?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    account?: LedgerAccountOrderByWithRelationInput
  }

  export type LedgerEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LedgerEntryWhereInput | LedgerEntryWhereInput[]
    OR?: LedgerEntryWhereInput[]
    NOT?: LedgerEntryWhereInput | LedgerEntryWhereInput[]
    transactionId?: StringFilter<"LedgerEntry"> | string
    accountId?: StringFilter<"LedgerEntry"> | string
    amount?: BigIntFilter<"LedgerEntry"> | bigint | number
    currency?: StringFilter<"LedgerEntry"> | string
    description?: StringNullableFilter<"LedgerEntry"> | string | null
    metadata?: JsonNullableFilter<"LedgerEntry">
    createdAt?: DateTimeFilter<"LedgerEntry"> | Date | string
    account?: XOR<LedgerAccountRelationFilter, LedgerAccountWhereInput>
  }, "id">

  export type LedgerEntryOrderByWithAggregationInput = {
    id?: SortOrder
    transactionId?: SortOrder
    accountId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    description?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: LedgerEntryCountOrderByAggregateInput
    _avg?: LedgerEntryAvgOrderByAggregateInput
    _max?: LedgerEntryMaxOrderByAggregateInput
    _min?: LedgerEntryMinOrderByAggregateInput
    _sum?: LedgerEntrySumOrderByAggregateInput
  }

  export type LedgerEntryScalarWhereWithAggregatesInput = {
    AND?: LedgerEntryScalarWhereWithAggregatesInput | LedgerEntryScalarWhereWithAggregatesInput[]
    OR?: LedgerEntryScalarWhereWithAggregatesInput[]
    NOT?: LedgerEntryScalarWhereWithAggregatesInput | LedgerEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LedgerEntry"> | string
    transactionId?: StringWithAggregatesFilter<"LedgerEntry"> | string
    accountId?: StringWithAggregatesFilter<"LedgerEntry"> | string
    amount?: BigIntWithAggregatesFilter<"LedgerEntry"> | bigint | number
    currency?: StringWithAggregatesFilter<"LedgerEntry"> | string
    description?: StringNullableWithAggregatesFilter<"LedgerEntry"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"LedgerEntry">
    createdAt?: DateTimeWithAggregatesFilter<"LedgerEntry"> | Date | string
  }

  export type IdempotencyKeyWhereInput = {
    AND?: IdempotencyKeyWhereInput | IdempotencyKeyWhereInput[]
    OR?: IdempotencyKeyWhereInput[]
    NOT?: IdempotencyKeyWhereInput | IdempotencyKeyWhereInput[]
    key?: StringFilter<"IdempotencyKey"> | string
    responseBody?: JsonFilter<"IdempotencyKey">
    statusCode?: IntFilter<"IdempotencyKey"> | number
    createdAt?: DateTimeFilter<"IdempotencyKey"> | Date | string
  }

  export type IdempotencyKeyOrderByWithRelationInput = {
    key?: SortOrder
    responseBody?: SortOrder
    statusCode?: SortOrder
    createdAt?: SortOrder
  }

  export type IdempotencyKeyWhereUniqueInput = Prisma.AtLeast<{
    key?: string
    AND?: IdempotencyKeyWhereInput | IdempotencyKeyWhereInput[]
    OR?: IdempotencyKeyWhereInput[]
    NOT?: IdempotencyKeyWhereInput | IdempotencyKeyWhereInput[]
    responseBody?: JsonFilter<"IdempotencyKey">
    statusCode?: IntFilter<"IdempotencyKey"> | number
    createdAt?: DateTimeFilter<"IdempotencyKey"> | Date | string
  }, "key">

  export type IdempotencyKeyOrderByWithAggregationInput = {
    key?: SortOrder
    responseBody?: SortOrder
    statusCode?: SortOrder
    createdAt?: SortOrder
    _count?: IdempotencyKeyCountOrderByAggregateInput
    _avg?: IdempotencyKeyAvgOrderByAggregateInput
    _max?: IdempotencyKeyMaxOrderByAggregateInput
    _min?: IdempotencyKeyMinOrderByAggregateInput
    _sum?: IdempotencyKeySumOrderByAggregateInput
  }

  export type IdempotencyKeyScalarWhereWithAggregatesInput = {
    AND?: IdempotencyKeyScalarWhereWithAggregatesInput | IdempotencyKeyScalarWhereWithAggregatesInput[]
    OR?: IdempotencyKeyScalarWhereWithAggregatesInput[]
    NOT?: IdempotencyKeyScalarWhereWithAggregatesInput | IdempotencyKeyScalarWhereWithAggregatesInput[]
    key?: StringWithAggregatesFilter<"IdempotencyKey"> | string
    responseBody?: JsonWithAggregatesFilter<"IdempotencyKey">
    statusCode?: IntWithAggregatesFilter<"IdempotencyKey"> | number
    createdAt?: DateTimeWithAggregatesFilter<"IdempotencyKey"> | Date | string
  }

  export type LedgerAccountCreateInput = {
    id?: string
    name: string
    type: $Enums.AccountType
    currency?: string
    status?: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    entries?: LedgerEntryCreateNestedManyWithoutAccountInput
  }

  export type LedgerAccountUncheckedCreateInput = {
    id?: string
    name: string
    type: $Enums.AccountType
    currency?: string
    status?: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    entries?: LedgerEntryUncheckedCreateNestedManyWithoutAccountInput
  }

  export type LedgerAccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entries?: LedgerEntryUpdateManyWithoutAccountNestedInput
  }

  export type LedgerAccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entries?: LedgerEntryUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type LedgerAccountCreateManyInput = {
    id?: string
    name: string
    type: $Enums.AccountType
    currency?: string
    status?: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LedgerAccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LedgerAccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LedgerEntryCreateInput = {
    id?: string
    transactionId: string
    amount: bigint | number
    currency?: string
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    account: LedgerAccountCreateNestedOneWithoutEntriesInput
  }

  export type LedgerEntryUncheckedCreateInput = {
    id?: string
    transactionId: string
    accountId: string
    amount: bigint | number
    currency?: string
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type LedgerEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    currency?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: LedgerAccountUpdateOneRequiredWithoutEntriesNestedInput
  }

  export type LedgerEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    currency?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LedgerEntryCreateManyInput = {
    id?: string
    transactionId: string
    accountId: string
    amount: bigint | number
    currency?: string
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type LedgerEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    currency?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LedgerEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    currency?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdempotencyKeyCreateInput = {
    key: string
    responseBody: JsonNullValueInput | InputJsonValue
    statusCode: number
    createdAt?: Date | string
  }

  export type IdempotencyKeyUncheckedCreateInput = {
    key: string
    responseBody: JsonNullValueInput | InputJsonValue
    statusCode: number
    createdAt?: Date | string
  }

  export type IdempotencyKeyUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    responseBody?: JsonNullValueInput | InputJsonValue
    statusCode?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdempotencyKeyUncheckedUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    responseBody?: JsonNullValueInput | InputJsonValue
    statusCode?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdempotencyKeyCreateManyInput = {
    key: string
    responseBody: JsonNullValueInput | InputJsonValue
    statusCode: number
    createdAt?: Date | string
  }

  export type IdempotencyKeyUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    responseBody?: JsonNullValueInput | InputJsonValue
    statusCode?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdempotencyKeyUncheckedUpdateManyInput = {
    key?: StringFieldUpdateOperationsInput | string
    responseBody?: JsonNullValueInput | InputJsonValue
    statusCode?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumAccountTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountTypeFilter<$PrismaModel> | $Enums.AccountType
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type LedgerEntryListRelationFilter = {
    every?: LedgerEntryWhereInput
    some?: LedgerEntryWhereInput
    none?: LedgerEntryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LedgerEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LedgerAccountCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LedgerAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LedgerAccountMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumAccountTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountTypeWithAggregatesFilter<$PrismaModel> | $Enums.AccountType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountTypeFilter<$PrismaModel>
    _max?: NestedEnumAccountTypeFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type LedgerAccountRelationFilter = {
    is?: LedgerAccountWhereInput
    isNot?: LedgerAccountWhereInput
  }

  export type LedgerEntryCountOrderByAggregateInput = {
    id?: SortOrder
    transactionId?: SortOrder
    accountId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    description?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type LedgerEntryAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type LedgerEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    transactionId?: SortOrder
    accountId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type LedgerEntryMinOrderByAggregateInput = {
    id?: SortOrder
    transactionId?: SortOrder
    accountId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type LedgerEntrySumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IdempotencyKeyCountOrderByAggregateInput = {
    key?: SortOrder
    responseBody?: SortOrder
    statusCode?: SortOrder
    createdAt?: SortOrder
  }

  export type IdempotencyKeyAvgOrderByAggregateInput = {
    statusCode?: SortOrder
  }

  export type IdempotencyKeyMaxOrderByAggregateInput = {
    key?: SortOrder
    statusCode?: SortOrder
    createdAt?: SortOrder
  }

  export type IdempotencyKeyMinOrderByAggregateInput = {
    key?: SortOrder
    statusCode?: SortOrder
    createdAt?: SortOrder
  }

  export type IdempotencyKeySumOrderByAggregateInput = {
    statusCode?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type LedgerEntryCreateNestedManyWithoutAccountInput = {
    create?: XOR<LedgerEntryCreateWithoutAccountInput, LedgerEntryUncheckedCreateWithoutAccountInput> | LedgerEntryCreateWithoutAccountInput[] | LedgerEntryUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: LedgerEntryCreateOrConnectWithoutAccountInput | LedgerEntryCreateOrConnectWithoutAccountInput[]
    createMany?: LedgerEntryCreateManyAccountInputEnvelope
    connect?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[]
  }

  export type LedgerEntryUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<LedgerEntryCreateWithoutAccountInput, LedgerEntryUncheckedCreateWithoutAccountInput> | LedgerEntryCreateWithoutAccountInput[] | LedgerEntryUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: LedgerEntryCreateOrConnectWithoutAccountInput | LedgerEntryCreateOrConnectWithoutAccountInput[]
    createMany?: LedgerEntryCreateManyAccountInputEnvelope
    connect?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumAccountTypeFieldUpdateOperationsInput = {
    set?: $Enums.AccountType
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LedgerEntryUpdateManyWithoutAccountNestedInput = {
    create?: XOR<LedgerEntryCreateWithoutAccountInput, LedgerEntryUncheckedCreateWithoutAccountInput> | LedgerEntryCreateWithoutAccountInput[] | LedgerEntryUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: LedgerEntryCreateOrConnectWithoutAccountInput | LedgerEntryCreateOrConnectWithoutAccountInput[]
    upsert?: LedgerEntryUpsertWithWhereUniqueWithoutAccountInput | LedgerEntryUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: LedgerEntryCreateManyAccountInputEnvelope
    set?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[]
    disconnect?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[]
    delete?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[]
    connect?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[]
    update?: LedgerEntryUpdateWithWhereUniqueWithoutAccountInput | LedgerEntryUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: LedgerEntryUpdateManyWithWhereWithoutAccountInput | LedgerEntryUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: LedgerEntryScalarWhereInput | LedgerEntryScalarWhereInput[]
  }

  export type LedgerEntryUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<LedgerEntryCreateWithoutAccountInput, LedgerEntryUncheckedCreateWithoutAccountInput> | LedgerEntryCreateWithoutAccountInput[] | LedgerEntryUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: LedgerEntryCreateOrConnectWithoutAccountInput | LedgerEntryCreateOrConnectWithoutAccountInput[]
    upsert?: LedgerEntryUpsertWithWhereUniqueWithoutAccountInput | LedgerEntryUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: LedgerEntryCreateManyAccountInputEnvelope
    set?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[]
    disconnect?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[]
    delete?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[]
    connect?: LedgerEntryWhereUniqueInput | LedgerEntryWhereUniqueInput[]
    update?: LedgerEntryUpdateWithWhereUniqueWithoutAccountInput | LedgerEntryUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: LedgerEntryUpdateManyWithWhereWithoutAccountInput | LedgerEntryUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: LedgerEntryScalarWhereInput | LedgerEntryScalarWhereInput[]
  }

  export type LedgerAccountCreateNestedOneWithoutEntriesInput = {
    create?: XOR<LedgerAccountCreateWithoutEntriesInput, LedgerAccountUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: LedgerAccountCreateOrConnectWithoutEntriesInput
    connect?: LedgerAccountWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type LedgerAccountUpdateOneRequiredWithoutEntriesNestedInput = {
    create?: XOR<LedgerAccountCreateWithoutEntriesInput, LedgerAccountUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: LedgerAccountCreateOrConnectWithoutEntriesInput
    upsert?: LedgerAccountUpsertWithoutEntriesInput
    connect?: LedgerAccountWhereUniqueInput
    update?: XOR<XOR<LedgerAccountUpdateToOneWithWhereWithoutEntriesInput, LedgerAccountUpdateWithoutEntriesInput>, LedgerAccountUncheckedUpdateWithoutEntriesInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumAccountTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountTypeFilter<$PrismaModel> | $Enums.AccountType
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumAccountTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountTypeWithAggregatesFilter<$PrismaModel> | $Enums.AccountType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountTypeFilter<$PrismaModel>
    _max?: NestedEnumAccountTypeFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type LedgerEntryCreateWithoutAccountInput = {
    id?: string
    transactionId: string
    amount: bigint | number
    currency?: string
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type LedgerEntryUncheckedCreateWithoutAccountInput = {
    id?: string
    transactionId: string
    amount: bigint | number
    currency?: string
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type LedgerEntryCreateOrConnectWithoutAccountInput = {
    where: LedgerEntryWhereUniqueInput
    create: XOR<LedgerEntryCreateWithoutAccountInput, LedgerEntryUncheckedCreateWithoutAccountInput>
  }

  export type LedgerEntryCreateManyAccountInputEnvelope = {
    data: LedgerEntryCreateManyAccountInput | LedgerEntryCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type LedgerEntryUpsertWithWhereUniqueWithoutAccountInput = {
    where: LedgerEntryWhereUniqueInput
    update: XOR<LedgerEntryUpdateWithoutAccountInput, LedgerEntryUncheckedUpdateWithoutAccountInput>
    create: XOR<LedgerEntryCreateWithoutAccountInput, LedgerEntryUncheckedCreateWithoutAccountInput>
  }

  export type LedgerEntryUpdateWithWhereUniqueWithoutAccountInput = {
    where: LedgerEntryWhereUniqueInput
    data: XOR<LedgerEntryUpdateWithoutAccountInput, LedgerEntryUncheckedUpdateWithoutAccountInput>
  }

  export type LedgerEntryUpdateManyWithWhereWithoutAccountInput = {
    where: LedgerEntryScalarWhereInput
    data: XOR<LedgerEntryUpdateManyMutationInput, LedgerEntryUncheckedUpdateManyWithoutAccountInput>
  }

  export type LedgerEntryScalarWhereInput = {
    AND?: LedgerEntryScalarWhereInput | LedgerEntryScalarWhereInput[]
    OR?: LedgerEntryScalarWhereInput[]
    NOT?: LedgerEntryScalarWhereInput | LedgerEntryScalarWhereInput[]
    id?: StringFilter<"LedgerEntry"> | string
    transactionId?: StringFilter<"LedgerEntry"> | string
    accountId?: StringFilter<"LedgerEntry"> | string
    amount?: BigIntFilter<"LedgerEntry"> | bigint | number
    currency?: StringFilter<"LedgerEntry"> | string
    description?: StringNullableFilter<"LedgerEntry"> | string | null
    metadata?: JsonNullableFilter<"LedgerEntry">
    createdAt?: DateTimeFilter<"LedgerEntry"> | Date | string
  }

  export type LedgerAccountCreateWithoutEntriesInput = {
    id?: string
    name: string
    type: $Enums.AccountType
    currency?: string
    status?: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LedgerAccountUncheckedCreateWithoutEntriesInput = {
    id?: string
    name: string
    type: $Enums.AccountType
    currency?: string
    status?: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LedgerAccountCreateOrConnectWithoutEntriesInput = {
    where: LedgerAccountWhereUniqueInput
    create: XOR<LedgerAccountCreateWithoutEntriesInput, LedgerAccountUncheckedCreateWithoutEntriesInput>
  }

  export type LedgerAccountUpsertWithoutEntriesInput = {
    update: XOR<LedgerAccountUpdateWithoutEntriesInput, LedgerAccountUncheckedUpdateWithoutEntriesInput>
    create: XOR<LedgerAccountCreateWithoutEntriesInput, LedgerAccountUncheckedCreateWithoutEntriesInput>
    where?: LedgerAccountWhereInput
  }

  export type LedgerAccountUpdateToOneWithWhereWithoutEntriesInput = {
    where?: LedgerAccountWhereInput
    data: XOR<LedgerAccountUpdateWithoutEntriesInput, LedgerAccountUncheckedUpdateWithoutEntriesInput>
  }

  export type LedgerAccountUpdateWithoutEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LedgerAccountUncheckedUpdateWithoutEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LedgerEntryCreateManyAccountInput = {
    id?: string
    transactionId: string
    amount: bigint | number
    currency?: string
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type LedgerEntryUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    currency?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LedgerEntryUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    currency?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LedgerEntryUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    currency?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use LedgerAccountCountOutputTypeDefaultArgs instead
     */
    export type LedgerAccountCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LedgerAccountCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LedgerAccountDefaultArgs instead
     */
    export type LedgerAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LedgerAccountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LedgerEntryDefaultArgs instead
     */
    export type LedgerEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LedgerEntryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use IdempotencyKeyDefaultArgs instead
     */
    export type IdempotencyKeyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = IdempotencyKeyDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}