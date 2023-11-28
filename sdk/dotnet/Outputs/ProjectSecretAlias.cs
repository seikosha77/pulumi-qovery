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
    public sealed class ProjectSecretAlias
    {
        /// <summary>
        /// Id of the secret alias.
        /// </summary>
        public readonly string? Id;
        /// <summary>
        /// Name of the secret alias.
        /// </summary>
        public readonly string Key;
        /// <summary>
        /// Name of the secret to alias.
        /// </summary>
        public readonly string Value;

        [OutputConstructor]
        private ProjectSecretAlias(
            string? id,

            string key,

            string value)
        {
            Id = id;
            Key = key;
            Value = value;
        }
    }
}
