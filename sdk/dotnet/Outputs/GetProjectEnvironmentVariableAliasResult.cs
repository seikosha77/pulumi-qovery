// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;
using Pulumi;

namespace ediri.Qovery.Outputs
{

    [OutputType]
    public sealed class GetProjectEnvironmentVariableAliasResult
    {
        /// <summary>
        /// Id of the environment variable alias.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Name of the environment variable alias.
        /// </summary>
        public readonly string Key;
        /// <summary>
        /// Name of the variable to alias.
        /// </summary>
        public readonly string Value;

        [OutputConstructor]
        private GetProjectEnvironmentVariableAliasResult(
            string id,

            string key,

            string value)
        {
            Id = id;
            Key = key;
            Value = value;
        }
    }
}
