
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
 * Model RiskEvaluation
 * 
 */
export type RiskEvaluation = $Result.DefaultSelection<Prisma.$RiskEvaluationPayload>
/**
 * Model RiskLimit
 * 
 */
export type RiskLimit = $Result.DefaultSelection<Prisma.$RiskLimitPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more RiskEvaluations
 * const riskEvaluations = await prisma.riskEvaluation.findMany()
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
   * // Fetch zero or more RiskEvaluations
   * const riskEvaluations = await prisma.riskEvaluation.findMany()
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
   * `prisma.riskEvaluation`: Exposes CRUD operations for the **RiskEvaluation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RiskEvaluations
    * const riskEvaluations = await prisma.riskEvaluation.findMany()
    * ```
    */
  get riskEvaluation(): Prisma.RiskEvaluationDelegate<ExtArgs>;

  /**
   * `prisma.riskLimit`: Exposes CRUD operations for the **RiskLimit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RiskLimits
    * const riskLimits = await prisma.riskLimit.findMany()
    * ```
    */
  get riskLimit(): Prisma.RiskLimitDelegate<ExtArgs>;
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
    RiskEvaluation: 'RiskEvaluation',
    RiskLimit: 'RiskLimit'
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
      modelProps: "riskEvaluation" | "riskLimit"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      RiskEvaluation: {
        payload: Prisma.$RiskEvaluationPayload<ExtArgs>
        fields: Prisma.RiskEvaluationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RiskEvaluationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskEvaluationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RiskEvaluationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskEvaluationPayload>
          }
          findFirst: {
            args: Prisma.RiskEvaluationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskEvaluationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RiskEvaluationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskEvaluationPayload>
          }
          findMany: {
            args: Prisma.RiskEvaluationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskEvaluationPayload>[]
          }
          create: {
            args: Prisma.RiskEvaluationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskEvaluationPayload>
          }
          createMany: {
            args: Prisma.RiskEvaluationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RiskEvaluationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskEvaluationPayload>[]
          }
          delete: {
            args: Prisma.RiskEvaluationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskEvaluationPayload>
          }
          update: {
            args: Prisma.RiskEvaluationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskEvaluationPayload>
          }
          deleteMany: {
            args: Prisma.RiskEvaluationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RiskEvaluationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RiskEvaluationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskEvaluationPayload>
          }
          aggregate: {
            args: Prisma.RiskEvaluationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRiskEvaluation>
          }
          groupBy: {
            args: Prisma.RiskEvaluationGroupByArgs<ExtArgs>
            result: $Utils.Optional<RiskEvaluationGroupByOutputType>[]
          }
          count: {
            args: Prisma.RiskEvaluationCountArgs<ExtArgs>
            result: $Utils.Optional<RiskEvaluationCountAggregateOutputType> | number
          }
        }
      }
      RiskLimit: {
        payload: Prisma.$RiskLimitPayload<ExtArgs>
        fields: Prisma.RiskLimitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RiskLimitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskLimitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RiskLimitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskLimitPayload>
          }
          findFirst: {
            args: Prisma.RiskLimitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskLimitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RiskLimitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskLimitPayload>
          }
          findMany: {
            args: Prisma.RiskLimitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskLimitPayload>[]
          }
          create: {
            args: Prisma.RiskLimitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskLimitPayload>
          }
          createMany: {
            args: Prisma.RiskLimitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RiskLimitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskLimitPayload>[]
          }
          delete: {
            args: Prisma.RiskLimitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskLimitPayload>
          }
          update: {
            args: Prisma.RiskLimitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskLimitPayload>
          }
          deleteMany: {
            args: Prisma.RiskLimitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RiskLimitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RiskLimitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskLimitPayload>
          }
          aggregate: {
            args: Prisma.RiskLimitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRiskLimit>
          }
          groupBy: {
            args: Prisma.RiskLimitGroupByArgs<ExtArgs>
            result: $Utils.Optional<RiskLimitGroupByOutputType>[]
          }
          count: {
            args: Prisma.RiskLimitCountArgs<ExtArgs>
            result: $Utils.Optional<RiskLimitCountAggregateOutputType> | number
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
   * Models
   */

  /**
   * Model RiskEvaluation
   */

  export type AggregateRiskEvaluation = {
    _count: RiskEvaluationCountAggregateOutputType | null
    _avg: RiskEvaluationAvgAggregateOutputType | null
    _sum: RiskEvaluationSumAggregateOutputType | null
    _min: RiskEvaluationMinAggregateOutputType | null
    _max: RiskEvaluationMaxAggregateOutputType | null
  }

  export type RiskEvaluationAvgAggregateOutputType = {
    amount: number | null
    score: number | null
  }

  export type RiskEvaluationSumAggregateOutputType = {
    amount: bigint | null
    score: number | null
  }

  export type RiskEvaluationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    action: string | null
    amount: bigint | null
    currency: string | null
    score: number | null
    decision: string | null
    createdAt: Date | null
  }

  export type RiskEvaluationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    action: string | null
    amount: bigint | null
    currency: string | null
    score: number | null
    decision: string | null
    createdAt: Date | null
  }

  export type RiskEvaluationCountAggregateOutputType = {
    id: number
    userId: number
    action: number
    amount: number
    currency: number
    score: number
    decision: number
    reasons: number
    createdAt: number
    _all: number
  }


  export type RiskEvaluationAvgAggregateInputType = {
    amount?: true
    score?: true
  }

  export type RiskEvaluationSumAggregateInputType = {
    amount?: true
    score?: true
  }

  export type RiskEvaluationMinAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    amount?: true
    currency?: true
    score?: true
    decision?: true
    createdAt?: true
  }

  export type RiskEvaluationMaxAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    amount?: true
    currency?: true
    score?: true
    decision?: true
    createdAt?: true
  }

  export type RiskEvaluationCountAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    amount?: true
    currency?: true
    score?: true
    decision?: true
    reasons?: true
    createdAt?: true
    _all?: true
  }

  export type RiskEvaluationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RiskEvaluation to aggregate.
     */
    where?: RiskEvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RiskEvaluations to fetch.
     */
    orderBy?: RiskEvaluationOrderByWithRelationInput | RiskEvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RiskEvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RiskEvaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RiskEvaluations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RiskEvaluations
    **/
    _count?: true | RiskEvaluationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RiskEvaluationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RiskEvaluationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RiskEvaluationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RiskEvaluationMaxAggregateInputType
  }

  export type GetRiskEvaluationAggregateType<T extends RiskEvaluationAggregateArgs> = {
        [P in keyof T & keyof AggregateRiskEvaluation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRiskEvaluation[P]>
      : GetScalarType<T[P], AggregateRiskEvaluation[P]>
  }




  export type RiskEvaluationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RiskEvaluationWhereInput
    orderBy?: RiskEvaluationOrderByWithAggregationInput | RiskEvaluationOrderByWithAggregationInput[]
    by: RiskEvaluationScalarFieldEnum[] | RiskEvaluationScalarFieldEnum
    having?: RiskEvaluationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RiskEvaluationCountAggregateInputType | true
    _avg?: RiskEvaluationAvgAggregateInputType
    _sum?: RiskEvaluationSumAggregateInputType
    _min?: RiskEvaluationMinAggregateInputType
    _max?: RiskEvaluationMaxAggregateInputType
  }

  export type RiskEvaluationGroupByOutputType = {
    id: string
    userId: string
    action: string
    amount: bigint
    currency: string
    score: number
    decision: string
    reasons: JsonValue | null
    createdAt: Date
    _count: RiskEvaluationCountAggregateOutputType | null
    _avg: RiskEvaluationAvgAggregateOutputType | null
    _sum: RiskEvaluationSumAggregateOutputType | null
    _min: RiskEvaluationMinAggregateOutputType | null
    _max: RiskEvaluationMaxAggregateOutputType | null
  }

  type GetRiskEvaluationGroupByPayload<T extends RiskEvaluationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RiskEvaluationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RiskEvaluationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RiskEvaluationGroupByOutputType[P]>
            : GetScalarType<T[P], RiskEvaluationGroupByOutputType[P]>
        }
      >
    >


  export type RiskEvaluationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    amount?: boolean
    currency?: boolean
    score?: boolean
    decision?: boolean
    reasons?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["riskEvaluation"]>

  export type RiskEvaluationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    amount?: boolean
    currency?: boolean
    score?: boolean
    decision?: boolean
    reasons?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["riskEvaluation"]>

  export type RiskEvaluationSelectScalar = {
    id?: boolean
    userId?: boolean
    action?: boolean
    amount?: boolean
    currency?: boolean
    score?: boolean
    decision?: boolean
    reasons?: boolean
    createdAt?: boolean
  }


  export type $RiskEvaluationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RiskEvaluation"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      action: string
      amount: bigint
      currency: string
      score: number
      decision: string
      reasons: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["riskEvaluation"]>
    composites: {}
  }

  type RiskEvaluationGetPayload<S extends boolean | null | undefined | RiskEvaluationDefaultArgs> = $Result.GetResult<Prisma.$RiskEvaluationPayload, S>

  type RiskEvaluationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RiskEvaluationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RiskEvaluationCountAggregateInputType | true
    }

  export interface RiskEvaluationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RiskEvaluation'], meta: { name: 'RiskEvaluation' } }
    /**
     * Find zero or one RiskEvaluation that matches the filter.
     * @param {RiskEvaluationFindUniqueArgs} args - Arguments to find a RiskEvaluation
     * @example
     * // Get one RiskEvaluation
     * const riskEvaluation = await prisma.riskEvaluation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RiskEvaluationFindUniqueArgs>(args: SelectSubset<T, RiskEvaluationFindUniqueArgs<ExtArgs>>): Prisma__RiskEvaluationClient<$Result.GetResult<Prisma.$RiskEvaluationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RiskEvaluation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RiskEvaluationFindUniqueOrThrowArgs} args - Arguments to find a RiskEvaluation
     * @example
     * // Get one RiskEvaluation
     * const riskEvaluation = await prisma.riskEvaluation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RiskEvaluationFindUniqueOrThrowArgs>(args: SelectSubset<T, RiskEvaluationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RiskEvaluationClient<$Result.GetResult<Prisma.$RiskEvaluationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RiskEvaluation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskEvaluationFindFirstArgs} args - Arguments to find a RiskEvaluation
     * @example
     * // Get one RiskEvaluation
     * const riskEvaluation = await prisma.riskEvaluation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RiskEvaluationFindFirstArgs>(args?: SelectSubset<T, RiskEvaluationFindFirstArgs<ExtArgs>>): Prisma__RiskEvaluationClient<$Result.GetResult<Prisma.$RiskEvaluationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RiskEvaluation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskEvaluationFindFirstOrThrowArgs} args - Arguments to find a RiskEvaluation
     * @example
     * // Get one RiskEvaluation
     * const riskEvaluation = await prisma.riskEvaluation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RiskEvaluationFindFirstOrThrowArgs>(args?: SelectSubset<T, RiskEvaluationFindFirstOrThrowArgs<ExtArgs>>): Prisma__RiskEvaluationClient<$Result.GetResult<Prisma.$RiskEvaluationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RiskEvaluations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskEvaluationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RiskEvaluations
     * const riskEvaluations = await prisma.riskEvaluation.findMany()
     * 
     * // Get first 10 RiskEvaluations
     * const riskEvaluations = await prisma.riskEvaluation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const riskEvaluationWithIdOnly = await prisma.riskEvaluation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RiskEvaluationFindManyArgs>(args?: SelectSubset<T, RiskEvaluationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RiskEvaluationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RiskEvaluation.
     * @param {RiskEvaluationCreateArgs} args - Arguments to create a RiskEvaluation.
     * @example
     * // Create one RiskEvaluation
     * const RiskEvaluation = await prisma.riskEvaluation.create({
     *   data: {
     *     // ... data to create a RiskEvaluation
     *   }
     * })
     * 
     */
    create<T extends RiskEvaluationCreateArgs>(args: SelectSubset<T, RiskEvaluationCreateArgs<ExtArgs>>): Prisma__RiskEvaluationClient<$Result.GetResult<Prisma.$RiskEvaluationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RiskEvaluations.
     * @param {RiskEvaluationCreateManyArgs} args - Arguments to create many RiskEvaluations.
     * @example
     * // Create many RiskEvaluations
     * const riskEvaluation = await prisma.riskEvaluation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RiskEvaluationCreateManyArgs>(args?: SelectSubset<T, RiskEvaluationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RiskEvaluations and returns the data saved in the database.
     * @param {RiskEvaluationCreateManyAndReturnArgs} args - Arguments to create many RiskEvaluations.
     * @example
     * // Create many RiskEvaluations
     * const riskEvaluation = await prisma.riskEvaluation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RiskEvaluations and only return the `id`
     * const riskEvaluationWithIdOnly = await prisma.riskEvaluation.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RiskEvaluationCreateManyAndReturnArgs>(args?: SelectSubset<T, RiskEvaluationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RiskEvaluationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a RiskEvaluation.
     * @param {RiskEvaluationDeleteArgs} args - Arguments to delete one RiskEvaluation.
     * @example
     * // Delete one RiskEvaluation
     * const RiskEvaluation = await prisma.riskEvaluation.delete({
     *   where: {
     *     // ... filter to delete one RiskEvaluation
     *   }
     * })
     * 
     */
    delete<T extends RiskEvaluationDeleteArgs>(args: SelectSubset<T, RiskEvaluationDeleteArgs<ExtArgs>>): Prisma__RiskEvaluationClient<$Result.GetResult<Prisma.$RiskEvaluationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RiskEvaluation.
     * @param {RiskEvaluationUpdateArgs} args - Arguments to update one RiskEvaluation.
     * @example
     * // Update one RiskEvaluation
     * const riskEvaluation = await prisma.riskEvaluation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RiskEvaluationUpdateArgs>(args: SelectSubset<T, RiskEvaluationUpdateArgs<ExtArgs>>): Prisma__RiskEvaluationClient<$Result.GetResult<Prisma.$RiskEvaluationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RiskEvaluations.
     * @param {RiskEvaluationDeleteManyArgs} args - Arguments to filter RiskEvaluations to delete.
     * @example
     * // Delete a few RiskEvaluations
     * const { count } = await prisma.riskEvaluation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RiskEvaluationDeleteManyArgs>(args?: SelectSubset<T, RiskEvaluationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RiskEvaluations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskEvaluationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RiskEvaluations
     * const riskEvaluation = await prisma.riskEvaluation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RiskEvaluationUpdateManyArgs>(args: SelectSubset<T, RiskEvaluationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RiskEvaluation.
     * @param {RiskEvaluationUpsertArgs} args - Arguments to update or create a RiskEvaluation.
     * @example
     * // Update or create a RiskEvaluation
     * const riskEvaluation = await prisma.riskEvaluation.upsert({
     *   create: {
     *     // ... data to create a RiskEvaluation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RiskEvaluation we want to update
     *   }
     * })
     */
    upsert<T extends RiskEvaluationUpsertArgs>(args: SelectSubset<T, RiskEvaluationUpsertArgs<ExtArgs>>): Prisma__RiskEvaluationClient<$Result.GetResult<Prisma.$RiskEvaluationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RiskEvaluations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskEvaluationCountArgs} args - Arguments to filter RiskEvaluations to count.
     * @example
     * // Count the number of RiskEvaluations
     * const count = await prisma.riskEvaluation.count({
     *   where: {
     *     // ... the filter for the RiskEvaluations we want to count
     *   }
     * })
    **/
    count<T extends RiskEvaluationCountArgs>(
      args?: Subset<T, RiskEvaluationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RiskEvaluationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RiskEvaluation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskEvaluationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RiskEvaluationAggregateArgs>(args: Subset<T, RiskEvaluationAggregateArgs>): Prisma.PrismaPromise<GetRiskEvaluationAggregateType<T>>

    /**
     * Group by RiskEvaluation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskEvaluationGroupByArgs} args - Group by arguments.
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
      T extends RiskEvaluationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RiskEvaluationGroupByArgs['orderBy'] }
        : { orderBy?: RiskEvaluationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RiskEvaluationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRiskEvaluationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RiskEvaluation model
   */
  readonly fields: RiskEvaluationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RiskEvaluation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RiskEvaluationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the RiskEvaluation model
   */ 
  interface RiskEvaluationFieldRefs {
    readonly id: FieldRef<"RiskEvaluation", 'String'>
    readonly userId: FieldRef<"RiskEvaluation", 'String'>
    readonly action: FieldRef<"RiskEvaluation", 'String'>
    readonly amount: FieldRef<"RiskEvaluation", 'BigInt'>
    readonly currency: FieldRef<"RiskEvaluation", 'String'>
    readonly score: FieldRef<"RiskEvaluation", 'Int'>
    readonly decision: FieldRef<"RiskEvaluation", 'String'>
    readonly reasons: FieldRef<"RiskEvaluation", 'Json'>
    readonly createdAt: FieldRef<"RiskEvaluation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RiskEvaluation findUnique
   */
  export type RiskEvaluationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskEvaluation
     */
    select?: RiskEvaluationSelect<ExtArgs> | null
    /**
     * Filter, which RiskEvaluation to fetch.
     */
    where: RiskEvaluationWhereUniqueInput
  }

  /**
   * RiskEvaluation findUniqueOrThrow
   */
  export type RiskEvaluationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskEvaluation
     */
    select?: RiskEvaluationSelect<ExtArgs> | null
    /**
     * Filter, which RiskEvaluation to fetch.
     */
    where: RiskEvaluationWhereUniqueInput
  }

  /**
   * RiskEvaluation findFirst
   */
  export type RiskEvaluationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskEvaluation
     */
    select?: RiskEvaluationSelect<ExtArgs> | null
    /**
     * Filter, which RiskEvaluation to fetch.
     */
    where?: RiskEvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RiskEvaluations to fetch.
     */
    orderBy?: RiskEvaluationOrderByWithRelationInput | RiskEvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RiskEvaluations.
     */
    cursor?: RiskEvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RiskEvaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RiskEvaluations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RiskEvaluations.
     */
    distinct?: RiskEvaluationScalarFieldEnum | RiskEvaluationScalarFieldEnum[]
  }

  /**
   * RiskEvaluation findFirstOrThrow
   */
  export type RiskEvaluationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskEvaluation
     */
    select?: RiskEvaluationSelect<ExtArgs> | null
    /**
     * Filter, which RiskEvaluation to fetch.
     */
    where?: RiskEvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RiskEvaluations to fetch.
     */
    orderBy?: RiskEvaluationOrderByWithRelationInput | RiskEvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RiskEvaluations.
     */
    cursor?: RiskEvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RiskEvaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RiskEvaluations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RiskEvaluations.
     */
    distinct?: RiskEvaluationScalarFieldEnum | RiskEvaluationScalarFieldEnum[]
  }

  /**
   * RiskEvaluation findMany
   */
  export type RiskEvaluationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskEvaluation
     */
    select?: RiskEvaluationSelect<ExtArgs> | null
    /**
     * Filter, which RiskEvaluations to fetch.
     */
    where?: RiskEvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RiskEvaluations to fetch.
     */
    orderBy?: RiskEvaluationOrderByWithRelationInput | RiskEvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RiskEvaluations.
     */
    cursor?: RiskEvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RiskEvaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RiskEvaluations.
     */
    skip?: number
    distinct?: RiskEvaluationScalarFieldEnum | RiskEvaluationScalarFieldEnum[]
  }

  /**
   * RiskEvaluation create
   */
  export type RiskEvaluationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskEvaluation
     */
    select?: RiskEvaluationSelect<ExtArgs> | null
    /**
     * The data needed to create a RiskEvaluation.
     */
    data: XOR<RiskEvaluationCreateInput, RiskEvaluationUncheckedCreateInput>
  }

  /**
   * RiskEvaluation createMany
   */
  export type RiskEvaluationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RiskEvaluations.
     */
    data: RiskEvaluationCreateManyInput | RiskEvaluationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RiskEvaluation createManyAndReturn
   */
  export type RiskEvaluationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskEvaluation
     */
    select?: RiskEvaluationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many RiskEvaluations.
     */
    data: RiskEvaluationCreateManyInput | RiskEvaluationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RiskEvaluation update
   */
  export type RiskEvaluationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskEvaluation
     */
    select?: RiskEvaluationSelect<ExtArgs> | null
    /**
     * The data needed to update a RiskEvaluation.
     */
    data: XOR<RiskEvaluationUpdateInput, RiskEvaluationUncheckedUpdateInput>
    /**
     * Choose, which RiskEvaluation to update.
     */
    where: RiskEvaluationWhereUniqueInput
  }

  /**
   * RiskEvaluation updateMany
   */
  export type RiskEvaluationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RiskEvaluations.
     */
    data: XOR<RiskEvaluationUpdateManyMutationInput, RiskEvaluationUncheckedUpdateManyInput>
    /**
     * Filter which RiskEvaluations to update
     */
    where?: RiskEvaluationWhereInput
  }

  /**
   * RiskEvaluation upsert
   */
  export type RiskEvaluationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskEvaluation
     */
    select?: RiskEvaluationSelect<ExtArgs> | null
    /**
     * The filter to search for the RiskEvaluation to update in case it exists.
     */
    where: RiskEvaluationWhereUniqueInput
    /**
     * In case the RiskEvaluation found by the `where` argument doesn't exist, create a new RiskEvaluation with this data.
     */
    create: XOR<RiskEvaluationCreateInput, RiskEvaluationUncheckedCreateInput>
    /**
     * In case the RiskEvaluation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RiskEvaluationUpdateInput, RiskEvaluationUncheckedUpdateInput>
  }

  /**
   * RiskEvaluation delete
   */
  export type RiskEvaluationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskEvaluation
     */
    select?: RiskEvaluationSelect<ExtArgs> | null
    /**
     * Filter which RiskEvaluation to delete.
     */
    where: RiskEvaluationWhereUniqueInput
  }

  /**
   * RiskEvaluation deleteMany
   */
  export type RiskEvaluationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RiskEvaluations to delete
     */
    where?: RiskEvaluationWhereInput
  }

  /**
   * RiskEvaluation without action
   */
  export type RiskEvaluationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskEvaluation
     */
    select?: RiskEvaluationSelect<ExtArgs> | null
  }


  /**
   * Model RiskLimit
   */

  export type AggregateRiskLimit = {
    _count: RiskLimitCountAggregateOutputType | null
    _avg: RiskLimitAvgAggregateOutputType | null
    _sum: RiskLimitSumAggregateOutputType | null
    _min: RiskLimitMinAggregateOutputType | null
    _max: RiskLimitMaxAggregateOutputType | null
  }

  export type RiskLimitAvgAggregateOutputType = {
    dailyLimit: number | null
    monthlyLimit: number | null
    currentDaily: number | null
  }

  export type RiskLimitSumAggregateOutputType = {
    dailyLimit: bigint | null
    monthlyLimit: bigint | null
    currentDaily: bigint | null
  }

  export type RiskLimitMinAggregateOutputType = {
    userId: string | null
    dailyLimit: bigint | null
    monthlyLimit: bigint | null
    currentDaily: bigint | null
    updatedAt: Date | null
  }

  export type RiskLimitMaxAggregateOutputType = {
    userId: string | null
    dailyLimit: bigint | null
    monthlyLimit: bigint | null
    currentDaily: bigint | null
    updatedAt: Date | null
  }

  export type RiskLimitCountAggregateOutputType = {
    userId: number
    dailyLimit: number
    monthlyLimit: number
    currentDaily: number
    updatedAt: number
    _all: number
  }


  export type RiskLimitAvgAggregateInputType = {
    dailyLimit?: true
    monthlyLimit?: true
    currentDaily?: true
  }

  export type RiskLimitSumAggregateInputType = {
    dailyLimit?: true
    monthlyLimit?: true
    currentDaily?: true
  }

  export type RiskLimitMinAggregateInputType = {
    userId?: true
    dailyLimit?: true
    monthlyLimit?: true
    currentDaily?: true
    updatedAt?: true
  }

  export type RiskLimitMaxAggregateInputType = {
    userId?: true
    dailyLimit?: true
    monthlyLimit?: true
    currentDaily?: true
    updatedAt?: true
  }

  export type RiskLimitCountAggregateInputType = {
    userId?: true
    dailyLimit?: true
    monthlyLimit?: true
    currentDaily?: true
    updatedAt?: true
    _all?: true
  }

  export type RiskLimitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RiskLimit to aggregate.
     */
    where?: RiskLimitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RiskLimits to fetch.
     */
    orderBy?: RiskLimitOrderByWithRelationInput | RiskLimitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RiskLimitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RiskLimits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RiskLimits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RiskLimits
    **/
    _count?: true | RiskLimitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RiskLimitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RiskLimitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RiskLimitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RiskLimitMaxAggregateInputType
  }

  export type GetRiskLimitAggregateType<T extends RiskLimitAggregateArgs> = {
        [P in keyof T & keyof AggregateRiskLimit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRiskLimit[P]>
      : GetScalarType<T[P], AggregateRiskLimit[P]>
  }




  export type RiskLimitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RiskLimitWhereInput
    orderBy?: RiskLimitOrderByWithAggregationInput | RiskLimitOrderByWithAggregationInput[]
    by: RiskLimitScalarFieldEnum[] | RiskLimitScalarFieldEnum
    having?: RiskLimitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RiskLimitCountAggregateInputType | true
    _avg?: RiskLimitAvgAggregateInputType
    _sum?: RiskLimitSumAggregateInputType
    _min?: RiskLimitMinAggregateInputType
    _max?: RiskLimitMaxAggregateInputType
  }

  export type RiskLimitGroupByOutputType = {
    userId: string
    dailyLimit: bigint
    monthlyLimit: bigint
    currentDaily: bigint
    updatedAt: Date
    _count: RiskLimitCountAggregateOutputType | null
    _avg: RiskLimitAvgAggregateOutputType | null
    _sum: RiskLimitSumAggregateOutputType | null
    _min: RiskLimitMinAggregateOutputType | null
    _max: RiskLimitMaxAggregateOutputType | null
  }

  type GetRiskLimitGroupByPayload<T extends RiskLimitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RiskLimitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RiskLimitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RiskLimitGroupByOutputType[P]>
            : GetScalarType<T[P], RiskLimitGroupByOutputType[P]>
        }
      >
    >


  export type RiskLimitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    dailyLimit?: boolean
    monthlyLimit?: boolean
    currentDaily?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["riskLimit"]>

  export type RiskLimitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    dailyLimit?: boolean
    monthlyLimit?: boolean
    currentDaily?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["riskLimit"]>

  export type RiskLimitSelectScalar = {
    userId?: boolean
    dailyLimit?: boolean
    monthlyLimit?: boolean
    currentDaily?: boolean
    updatedAt?: boolean
  }


  export type $RiskLimitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RiskLimit"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      dailyLimit: bigint
      monthlyLimit: bigint
      currentDaily: bigint
      updatedAt: Date
    }, ExtArgs["result"]["riskLimit"]>
    composites: {}
  }

  type RiskLimitGetPayload<S extends boolean | null | undefined | RiskLimitDefaultArgs> = $Result.GetResult<Prisma.$RiskLimitPayload, S>

  type RiskLimitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RiskLimitFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RiskLimitCountAggregateInputType | true
    }

  export interface RiskLimitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RiskLimit'], meta: { name: 'RiskLimit' } }
    /**
     * Find zero or one RiskLimit that matches the filter.
     * @param {RiskLimitFindUniqueArgs} args - Arguments to find a RiskLimit
     * @example
     * // Get one RiskLimit
     * const riskLimit = await prisma.riskLimit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RiskLimitFindUniqueArgs>(args: SelectSubset<T, RiskLimitFindUniqueArgs<ExtArgs>>): Prisma__RiskLimitClient<$Result.GetResult<Prisma.$RiskLimitPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RiskLimit that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RiskLimitFindUniqueOrThrowArgs} args - Arguments to find a RiskLimit
     * @example
     * // Get one RiskLimit
     * const riskLimit = await prisma.riskLimit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RiskLimitFindUniqueOrThrowArgs>(args: SelectSubset<T, RiskLimitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RiskLimitClient<$Result.GetResult<Prisma.$RiskLimitPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RiskLimit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskLimitFindFirstArgs} args - Arguments to find a RiskLimit
     * @example
     * // Get one RiskLimit
     * const riskLimit = await prisma.riskLimit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RiskLimitFindFirstArgs>(args?: SelectSubset<T, RiskLimitFindFirstArgs<ExtArgs>>): Prisma__RiskLimitClient<$Result.GetResult<Prisma.$RiskLimitPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RiskLimit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskLimitFindFirstOrThrowArgs} args - Arguments to find a RiskLimit
     * @example
     * // Get one RiskLimit
     * const riskLimit = await prisma.riskLimit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RiskLimitFindFirstOrThrowArgs>(args?: SelectSubset<T, RiskLimitFindFirstOrThrowArgs<ExtArgs>>): Prisma__RiskLimitClient<$Result.GetResult<Prisma.$RiskLimitPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RiskLimits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskLimitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RiskLimits
     * const riskLimits = await prisma.riskLimit.findMany()
     * 
     * // Get first 10 RiskLimits
     * const riskLimits = await prisma.riskLimit.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const riskLimitWithUserIdOnly = await prisma.riskLimit.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends RiskLimitFindManyArgs>(args?: SelectSubset<T, RiskLimitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RiskLimitPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RiskLimit.
     * @param {RiskLimitCreateArgs} args - Arguments to create a RiskLimit.
     * @example
     * // Create one RiskLimit
     * const RiskLimit = await prisma.riskLimit.create({
     *   data: {
     *     // ... data to create a RiskLimit
     *   }
     * })
     * 
     */
    create<T extends RiskLimitCreateArgs>(args: SelectSubset<T, RiskLimitCreateArgs<ExtArgs>>): Prisma__RiskLimitClient<$Result.GetResult<Prisma.$RiskLimitPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RiskLimits.
     * @param {RiskLimitCreateManyArgs} args - Arguments to create many RiskLimits.
     * @example
     * // Create many RiskLimits
     * const riskLimit = await prisma.riskLimit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RiskLimitCreateManyArgs>(args?: SelectSubset<T, RiskLimitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RiskLimits and returns the data saved in the database.
     * @param {RiskLimitCreateManyAndReturnArgs} args - Arguments to create many RiskLimits.
     * @example
     * // Create many RiskLimits
     * const riskLimit = await prisma.riskLimit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RiskLimits and only return the `userId`
     * const riskLimitWithUserIdOnly = await prisma.riskLimit.createManyAndReturn({ 
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RiskLimitCreateManyAndReturnArgs>(args?: SelectSubset<T, RiskLimitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RiskLimitPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a RiskLimit.
     * @param {RiskLimitDeleteArgs} args - Arguments to delete one RiskLimit.
     * @example
     * // Delete one RiskLimit
     * const RiskLimit = await prisma.riskLimit.delete({
     *   where: {
     *     // ... filter to delete one RiskLimit
     *   }
     * })
     * 
     */
    delete<T extends RiskLimitDeleteArgs>(args: SelectSubset<T, RiskLimitDeleteArgs<ExtArgs>>): Prisma__RiskLimitClient<$Result.GetResult<Prisma.$RiskLimitPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RiskLimit.
     * @param {RiskLimitUpdateArgs} args - Arguments to update one RiskLimit.
     * @example
     * // Update one RiskLimit
     * const riskLimit = await prisma.riskLimit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RiskLimitUpdateArgs>(args: SelectSubset<T, RiskLimitUpdateArgs<ExtArgs>>): Prisma__RiskLimitClient<$Result.GetResult<Prisma.$RiskLimitPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RiskLimits.
     * @param {RiskLimitDeleteManyArgs} args - Arguments to filter RiskLimits to delete.
     * @example
     * // Delete a few RiskLimits
     * const { count } = await prisma.riskLimit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RiskLimitDeleteManyArgs>(args?: SelectSubset<T, RiskLimitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RiskLimits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskLimitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RiskLimits
     * const riskLimit = await prisma.riskLimit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RiskLimitUpdateManyArgs>(args: SelectSubset<T, RiskLimitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RiskLimit.
     * @param {RiskLimitUpsertArgs} args - Arguments to update or create a RiskLimit.
     * @example
     * // Update or create a RiskLimit
     * const riskLimit = await prisma.riskLimit.upsert({
     *   create: {
     *     // ... data to create a RiskLimit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RiskLimit we want to update
     *   }
     * })
     */
    upsert<T extends RiskLimitUpsertArgs>(args: SelectSubset<T, RiskLimitUpsertArgs<ExtArgs>>): Prisma__RiskLimitClient<$Result.GetResult<Prisma.$RiskLimitPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RiskLimits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskLimitCountArgs} args - Arguments to filter RiskLimits to count.
     * @example
     * // Count the number of RiskLimits
     * const count = await prisma.riskLimit.count({
     *   where: {
     *     // ... the filter for the RiskLimits we want to count
     *   }
     * })
    **/
    count<T extends RiskLimitCountArgs>(
      args?: Subset<T, RiskLimitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RiskLimitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RiskLimit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskLimitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RiskLimitAggregateArgs>(args: Subset<T, RiskLimitAggregateArgs>): Prisma.PrismaPromise<GetRiskLimitAggregateType<T>>

    /**
     * Group by RiskLimit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskLimitGroupByArgs} args - Group by arguments.
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
      T extends RiskLimitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RiskLimitGroupByArgs['orderBy'] }
        : { orderBy?: RiskLimitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RiskLimitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRiskLimitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RiskLimit model
   */
  readonly fields: RiskLimitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RiskLimit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RiskLimitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the RiskLimit model
   */ 
  interface RiskLimitFieldRefs {
    readonly userId: FieldRef<"RiskLimit", 'String'>
    readonly dailyLimit: FieldRef<"RiskLimit", 'BigInt'>
    readonly monthlyLimit: FieldRef<"RiskLimit", 'BigInt'>
    readonly currentDaily: FieldRef<"RiskLimit", 'BigInt'>
    readonly updatedAt: FieldRef<"RiskLimit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RiskLimit findUnique
   */
  export type RiskLimitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskLimit
     */
    select?: RiskLimitSelect<ExtArgs> | null
    /**
     * Filter, which RiskLimit to fetch.
     */
    where: RiskLimitWhereUniqueInput
  }

  /**
   * RiskLimit findUniqueOrThrow
   */
  export type RiskLimitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskLimit
     */
    select?: RiskLimitSelect<ExtArgs> | null
    /**
     * Filter, which RiskLimit to fetch.
     */
    where: RiskLimitWhereUniqueInput
  }

  /**
   * RiskLimit findFirst
   */
  export type RiskLimitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskLimit
     */
    select?: RiskLimitSelect<ExtArgs> | null
    /**
     * Filter, which RiskLimit to fetch.
     */
    where?: RiskLimitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RiskLimits to fetch.
     */
    orderBy?: RiskLimitOrderByWithRelationInput | RiskLimitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RiskLimits.
     */
    cursor?: RiskLimitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RiskLimits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RiskLimits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RiskLimits.
     */
    distinct?: RiskLimitScalarFieldEnum | RiskLimitScalarFieldEnum[]
  }

  /**
   * RiskLimit findFirstOrThrow
   */
  export type RiskLimitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskLimit
     */
    select?: RiskLimitSelect<ExtArgs> | null
    /**
     * Filter, which RiskLimit to fetch.
     */
    where?: RiskLimitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RiskLimits to fetch.
     */
    orderBy?: RiskLimitOrderByWithRelationInput | RiskLimitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RiskLimits.
     */
    cursor?: RiskLimitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RiskLimits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RiskLimits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RiskLimits.
     */
    distinct?: RiskLimitScalarFieldEnum | RiskLimitScalarFieldEnum[]
  }

  /**
   * RiskLimit findMany
   */
  export type RiskLimitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskLimit
     */
    select?: RiskLimitSelect<ExtArgs> | null
    /**
     * Filter, which RiskLimits to fetch.
     */
    where?: RiskLimitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RiskLimits to fetch.
     */
    orderBy?: RiskLimitOrderByWithRelationInput | RiskLimitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RiskLimits.
     */
    cursor?: RiskLimitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RiskLimits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RiskLimits.
     */
    skip?: number
    distinct?: RiskLimitScalarFieldEnum | RiskLimitScalarFieldEnum[]
  }

  /**
   * RiskLimit create
   */
  export type RiskLimitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskLimit
     */
    select?: RiskLimitSelect<ExtArgs> | null
    /**
     * The data needed to create a RiskLimit.
     */
    data: XOR<RiskLimitCreateInput, RiskLimitUncheckedCreateInput>
  }

  /**
   * RiskLimit createMany
   */
  export type RiskLimitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RiskLimits.
     */
    data: RiskLimitCreateManyInput | RiskLimitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RiskLimit createManyAndReturn
   */
  export type RiskLimitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskLimit
     */
    select?: RiskLimitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many RiskLimits.
     */
    data: RiskLimitCreateManyInput | RiskLimitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RiskLimit update
   */
  export type RiskLimitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskLimit
     */
    select?: RiskLimitSelect<ExtArgs> | null
    /**
     * The data needed to update a RiskLimit.
     */
    data: XOR<RiskLimitUpdateInput, RiskLimitUncheckedUpdateInput>
    /**
     * Choose, which RiskLimit to update.
     */
    where: RiskLimitWhereUniqueInput
  }

  /**
   * RiskLimit updateMany
   */
  export type RiskLimitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RiskLimits.
     */
    data: XOR<RiskLimitUpdateManyMutationInput, RiskLimitUncheckedUpdateManyInput>
    /**
     * Filter which RiskLimits to update
     */
    where?: RiskLimitWhereInput
  }

  /**
   * RiskLimit upsert
   */
  export type RiskLimitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskLimit
     */
    select?: RiskLimitSelect<ExtArgs> | null
    /**
     * The filter to search for the RiskLimit to update in case it exists.
     */
    where: RiskLimitWhereUniqueInput
    /**
     * In case the RiskLimit found by the `where` argument doesn't exist, create a new RiskLimit with this data.
     */
    create: XOR<RiskLimitCreateInput, RiskLimitUncheckedCreateInput>
    /**
     * In case the RiskLimit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RiskLimitUpdateInput, RiskLimitUncheckedUpdateInput>
  }

  /**
   * RiskLimit delete
   */
  export type RiskLimitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskLimit
     */
    select?: RiskLimitSelect<ExtArgs> | null
    /**
     * Filter which RiskLimit to delete.
     */
    where: RiskLimitWhereUniqueInput
  }

  /**
   * RiskLimit deleteMany
   */
  export type RiskLimitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RiskLimits to delete
     */
    where?: RiskLimitWhereInput
  }

  /**
   * RiskLimit without action
   */
  export type RiskLimitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskLimit
     */
    select?: RiskLimitSelect<ExtArgs> | null
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


  export const RiskEvaluationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    action: 'action',
    amount: 'amount',
    currency: 'currency',
    score: 'score',
    decision: 'decision',
    reasons: 'reasons',
    createdAt: 'createdAt'
  };

  export type RiskEvaluationScalarFieldEnum = (typeof RiskEvaluationScalarFieldEnum)[keyof typeof RiskEvaluationScalarFieldEnum]


  export const RiskLimitScalarFieldEnum: {
    userId: 'userId',
    dailyLimit: 'dailyLimit',
    monthlyLimit: 'monthlyLimit',
    currentDaily: 'currentDaily',
    updatedAt: 'updatedAt'
  };

  export type RiskLimitScalarFieldEnum = (typeof RiskLimitScalarFieldEnum)[keyof typeof RiskLimitScalarFieldEnum]


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


  export type RiskEvaluationWhereInput = {
    AND?: RiskEvaluationWhereInput | RiskEvaluationWhereInput[]
    OR?: RiskEvaluationWhereInput[]
    NOT?: RiskEvaluationWhereInput | RiskEvaluationWhereInput[]
    id?: StringFilter<"RiskEvaluation"> | string
    userId?: StringFilter<"RiskEvaluation"> | string
    action?: StringFilter<"RiskEvaluation"> | string
    amount?: BigIntFilter<"RiskEvaluation"> | bigint | number
    currency?: StringFilter<"RiskEvaluation"> | string
    score?: IntFilter<"RiskEvaluation"> | number
    decision?: StringFilter<"RiskEvaluation"> | string
    reasons?: JsonNullableFilter<"RiskEvaluation">
    createdAt?: DateTimeFilter<"RiskEvaluation"> | Date | string
  }

  export type RiskEvaluationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    score?: SortOrder
    decision?: SortOrder
    reasons?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type RiskEvaluationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RiskEvaluationWhereInput | RiskEvaluationWhereInput[]
    OR?: RiskEvaluationWhereInput[]
    NOT?: RiskEvaluationWhereInput | RiskEvaluationWhereInput[]
    userId?: StringFilter<"RiskEvaluation"> | string
    action?: StringFilter<"RiskEvaluation"> | string
    amount?: BigIntFilter<"RiskEvaluation"> | bigint | number
    currency?: StringFilter<"RiskEvaluation"> | string
    score?: IntFilter<"RiskEvaluation"> | number
    decision?: StringFilter<"RiskEvaluation"> | string
    reasons?: JsonNullableFilter<"RiskEvaluation">
    createdAt?: DateTimeFilter<"RiskEvaluation"> | Date | string
  }, "id">

  export type RiskEvaluationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    score?: SortOrder
    decision?: SortOrder
    reasons?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: RiskEvaluationCountOrderByAggregateInput
    _avg?: RiskEvaluationAvgOrderByAggregateInput
    _max?: RiskEvaluationMaxOrderByAggregateInput
    _min?: RiskEvaluationMinOrderByAggregateInput
    _sum?: RiskEvaluationSumOrderByAggregateInput
  }

  export type RiskEvaluationScalarWhereWithAggregatesInput = {
    AND?: RiskEvaluationScalarWhereWithAggregatesInput | RiskEvaluationScalarWhereWithAggregatesInput[]
    OR?: RiskEvaluationScalarWhereWithAggregatesInput[]
    NOT?: RiskEvaluationScalarWhereWithAggregatesInput | RiskEvaluationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RiskEvaluation"> | string
    userId?: StringWithAggregatesFilter<"RiskEvaluation"> | string
    action?: StringWithAggregatesFilter<"RiskEvaluation"> | string
    amount?: BigIntWithAggregatesFilter<"RiskEvaluation"> | bigint | number
    currency?: StringWithAggregatesFilter<"RiskEvaluation"> | string
    score?: IntWithAggregatesFilter<"RiskEvaluation"> | number
    decision?: StringWithAggregatesFilter<"RiskEvaluation"> | string
    reasons?: JsonNullableWithAggregatesFilter<"RiskEvaluation">
    createdAt?: DateTimeWithAggregatesFilter<"RiskEvaluation"> | Date | string
  }

  export type RiskLimitWhereInput = {
    AND?: RiskLimitWhereInput | RiskLimitWhereInput[]
    OR?: RiskLimitWhereInput[]
    NOT?: RiskLimitWhereInput | RiskLimitWhereInput[]
    userId?: StringFilter<"RiskLimit"> | string
    dailyLimit?: BigIntFilter<"RiskLimit"> | bigint | number
    monthlyLimit?: BigIntFilter<"RiskLimit"> | bigint | number
    currentDaily?: BigIntFilter<"RiskLimit"> | bigint | number
    updatedAt?: DateTimeFilter<"RiskLimit"> | Date | string
  }

  export type RiskLimitOrderByWithRelationInput = {
    userId?: SortOrder
    dailyLimit?: SortOrder
    monthlyLimit?: SortOrder
    currentDaily?: SortOrder
    updatedAt?: SortOrder
  }

  export type RiskLimitWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    AND?: RiskLimitWhereInput | RiskLimitWhereInput[]
    OR?: RiskLimitWhereInput[]
    NOT?: RiskLimitWhereInput | RiskLimitWhereInput[]
    dailyLimit?: BigIntFilter<"RiskLimit"> | bigint | number
    monthlyLimit?: BigIntFilter<"RiskLimit"> | bigint | number
    currentDaily?: BigIntFilter<"RiskLimit"> | bigint | number
    updatedAt?: DateTimeFilter<"RiskLimit"> | Date | string
  }, "userId">

  export type RiskLimitOrderByWithAggregationInput = {
    userId?: SortOrder
    dailyLimit?: SortOrder
    monthlyLimit?: SortOrder
    currentDaily?: SortOrder
    updatedAt?: SortOrder
    _count?: RiskLimitCountOrderByAggregateInput
    _avg?: RiskLimitAvgOrderByAggregateInput
    _max?: RiskLimitMaxOrderByAggregateInput
    _min?: RiskLimitMinOrderByAggregateInput
    _sum?: RiskLimitSumOrderByAggregateInput
  }

  export type RiskLimitScalarWhereWithAggregatesInput = {
    AND?: RiskLimitScalarWhereWithAggregatesInput | RiskLimitScalarWhereWithAggregatesInput[]
    OR?: RiskLimitScalarWhereWithAggregatesInput[]
    NOT?: RiskLimitScalarWhereWithAggregatesInput | RiskLimitScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"RiskLimit"> | string
    dailyLimit?: BigIntWithAggregatesFilter<"RiskLimit"> | bigint | number
    monthlyLimit?: BigIntWithAggregatesFilter<"RiskLimit"> | bigint | number
    currentDaily?: BigIntWithAggregatesFilter<"RiskLimit"> | bigint | number
    updatedAt?: DateTimeWithAggregatesFilter<"RiskLimit"> | Date | string
  }

  export type RiskEvaluationCreateInput = {
    id?: string
    userId: string
    action: string
    amount: bigint | number
    currency: string
    score: number
    decision: string
    reasons?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type RiskEvaluationUncheckedCreateInput = {
    id?: string
    userId: string
    action: string
    amount: bigint | number
    currency: string
    score: number
    decision: string
    reasons?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type RiskEvaluationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    currency?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    decision?: StringFieldUpdateOperationsInput | string
    reasons?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiskEvaluationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    currency?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    decision?: StringFieldUpdateOperationsInput | string
    reasons?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiskEvaluationCreateManyInput = {
    id?: string
    userId: string
    action: string
    amount: bigint | number
    currency: string
    score: number
    decision: string
    reasons?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type RiskEvaluationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    currency?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    decision?: StringFieldUpdateOperationsInput | string
    reasons?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiskEvaluationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    currency?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    decision?: StringFieldUpdateOperationsInput | string
    reasons?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiskLimitCreateInput = {
    userId: string
    dailyLimit: bigint | number
    monthlyLimit: bigint | number
    currentDaily?: bigint | number
    updatedAt?: Date | string
  }

  export type RiskLimitUncheckedCreateInput = {
    userId: string
    dailyLimit: bigint | number
    monthlyLimit: bigint | number
    currentDaily?: bigint | number
    updatedAt?: Date | string
  }

  export type RiskLimitUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    dailyLimit?: BigIntFieldUpdateOperationsInput | bigint | number
    monthlyLimit?: BigIntFieldUpdateOperationsInput | bigint | number
    currentDaily?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiskLimitUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    dailyLimit?: BigIntFieldUpdateOperationsInput | bigint | number
    monthlyLimit?: BigIntFieldUpdateOperationsInput | bigint | number
    currentDaily?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiskLimitCreateManyInput = {
    userId: string
    dailyLimit: bigint | number
    monthlyLimit: bigint | number
    currentDaily?: bigint | number
    updatedAt?: Date | string
  }

  export type RiskLimitUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    dailyLimit?: BigIntFieldUpdateOperationsInput | bigint | number
    monthlyLimit?: BigIntFieldUpdateOperationsInput | bigint | number
    currentDaily?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiskLimitUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    dailyLimit?: BigIntFieldUpdateOperationsInput | bigint | number
    monthlyLimit?: BigIntFieldUpdateOperationsInput | bigint | number
    currentDaily?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RiskEvaluationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    score?: SortOrder
    decision?: SortOrder
    reasons?: SortOrder
    createdAt?: SortOrder
  }

  export type RiskEvaluationAvgOrderByAggregateInput = {
    amount?: SortOrder
    score?: SortOrder
  }

  export type RiskEvaluationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    score?: SortOrder
    decision?: SortOrder
    createdAt?: SortOrder
  }

  export type RiskEvaluationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    score?: SortOrder
    decision?: SortOrder
    createdAt?: SortOrder
  }

  export type RiskEvaluationSumOrderByAggregateInput = {
    amount?: SortOrder
    score?: SortOrder
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

  export type RiskLimitCountOrderByAggregateInput = {
    userId?: SortOrder
    dailyLimit?: SortOrder
    monthlyLimit?: SortOrder
    currentDaily?: SortOrder
    updatedAt?: SortOrder
  }

  export type RiskLimitAvgOrderByAggregateInput = {
    dailyLimit?: SortOrder
    monthlyLimit?: SortOrder
    currentDaily?: SortOrder
  }

  export type RiskLimitMaxOrderByAggregateInput = {
    userId?: SortOrder
    dailyLimit?: SortOrder
    monthlyLimit?: SortOrder
    currentDaily?: SortOrder
    updatedAt?: SortOrder
  }

  export type RiskLimitMinOrderByAggregateInput = {
    userId?: SortOrder
    dailyLimit?: SortOrder
    monthlyLimit?: SortOrder
    currentDaily?: SortOrder
    updatedAt?: SortOrder
  }

  export type RiskLimitSumOrderByAggregateInput = {
    dailyLimit?: SortOrder
    monthlyLimit?: SortOrder
    currentDaily?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use RiskEvaluationDefaultArgs instead
     */
    export type RiskEvaluationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RiskEvaluationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RiskLimitDefaultArgs instead
     */
    export type RiskLimitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RiskLimitDefaultArgs<ExtArgs>

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