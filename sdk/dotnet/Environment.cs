// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;
using Pulumi;

namespace ediri.Qovery
{
    /// <summary>
    /// ## Import
    /// 
    /// ```sh
    ///  $ pulumi import qovery:index/environment:Environment my_environment "&lt;environment_id&gt;"
    /// ```
    /// </summary>
    [QoveryResourceType("qovery:index/environment:Environment")]
    public partial class Environment : global::Pulumi.CustomResource
    {
        /// <summary>
        /// List of built-in environment variables linked to this environment.
        /// </summary>
        [Output("builtInEnvironmentVariables")]
        public Output<ImmutableArray<Outputs.EnvironmentBuiltInEnvironmentVariable>> BuiltInEnvironmentVariables { get; private set; } = null!;

        /// <summary>
        /// Id of the cluster [NOTE: can't be updated after creation].
        /// </summary>
        [Output("clusterId")]
        public Output<string> ClusterId { get; private set; } = null!;

        /// <summary>
        /// List of environment variable aliases linked to this environment.
        /// </summary>
        [Output("environmentVariableAliases")]
        public Output<ImmutableArray<Outputs.EnvironmentEnvironmentVariableAlias>> EnvironmentVariableAliases { get; private set; } = null!;

        /// <summary>
        /// List of environment variable overrides linked to this environment.
        /// </summary>
        [Output("environmentVariableOverrides")]
        public Output<ImmutableArray<Outputs.EnvironmentEnvironmentVariableOverride>> EnvironmentVariableOverrides { get; private set; } = null!;

        /// <summary>
        /// List of environment variables linked to this environment.
        /// </summary>
        [Output("environmentVariables")]
        public Output<ImmutableArray<Outputs.EnvironmentEnvironmentVariable>> EnvironmentVariables { get; private set; } = null!;

        /// <summary>
        /// Mode of the environment [NOTE: can't be updated after creation]. - Can be: `DEVELOPMENT`, `PREVIEW`, `PRODUCTION`,
        /// `STAGING`. - Default: `DEVELOPMENT`.
        /// </summary>
        [Output("mode")]
        public Output<string> Mode { get; private set; } = null!;

        /// <summary>
        /// Name of the environment.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Id of the project.
        /// </summary>
        [Output("projectId")]
        public Output<string> ProjectId { get; private set; } = null!;

        /// <summary>
        /// List of secret aliases linked to this environment.
        /// </summary>
        [Output("secretAliases")]
        public Output<ImmutableArray<Outputs.EnvironmentSecretAlias>> SecretAliases { get; private set; } = null!;

        /// <summary>
        /// List of secret overrides linked to this environment.
        /// </summary>
        [Output("secretOverrides")]
        public Output<ImmutableArray<Outputs.EnvironmentSecretOverride>> SecretOverrides { get; private set; } = null!;

        /// <summary>
        /// List of secrets linked to this environment.
        /// </summary>
        [Output("secrets")]
        public Output<ImmutableArray<Outputs.EnvironmentSecret>> Secrets { get; private set; } = null!;


        /// <summary>
        /// Create a Environment resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Environment(string name, EnvironmentArgs args, CustomResourceOptions? options = null)
            : base("qovery:index/environment:Environment", name, args ?? new EnvironmentArgs(), MakeResourceOptions(options, ""))
        {
        }

        private Environment(string name, Input<string> id, EnvironmentState? state = null, CustomResourceOptions? options = null)
            : base("qovery:index/environment:Environment", name, state, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                PluginDownloadURL = "github://api.github.com/dirien/pulumi-qovery",
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing Environment resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Environment Get(string name, Input<string> id, EnvironmentState? state = null, CustomResourceOptions? options = null)
        {
            return new Environment(name, id, state, options);
        }
    }

    public sealed class EnvironmentArgs : global::Pulumi.ResourceArgs
    {
        /// <summary>
        /// Id of the cluster [NOTE: can't be updated after creation].
        /// </summary>
        [Input("clusterId", required: true)]
        public Input<string> ClusterId { get; set; } = null!;

        [Input("environmentVariableAliases")]
        private InputList<Inputs.EnvironmentEnvironmentVariableAliasArgs>? _environmentVariableAliases;

        /// <summary>
        /// List of environment variable aliases linked to this environment.
        /// </summary>
        public InputList<Inputs.EnvironmentEnvironmentVariableAliasArgs> EnvironmentVariableAliases
        {
            get => _environmentVariableAliases ?? (_environmentVariableAliases = new InputList<Inputs.EnvironmentEnvironmentVariableAliasArgs>());
            set => _environmentVariableAliases = value;
        }

        [Input("environmentVariableOverrides")]
        private InputList<Inputs.EnvironmentEnvironmentVariableOverrideArgs>? _environmentVariableOverrides;

        /// <summary>
        /// List of environment variable overrides linked to this environment.
        /// </summary>
        public InputList<Inputs.EnvironmentEnvironmentVariableOverrideArgs> EnvironmentVariableOverrides
        {
            get => _environmentVariableOverrides ?? (_environmentVariableOverrides = new InputList<Inputs.EnvironmentEnvironmentVariableOverrideArgs>());
            set => _environmentVariableOverrides = value;
        }

        [Input("environmentVariables")]
        private InputList<Inputs.EnvironmentEnvironmentVariableArgs>? _environmentVariables;

        /// <summary>
        /// List of environment variables linked to this environment.
        /// </summary>
        public InputList<Inputs.EnvironmentEnvironmentVariableArgs> EnvironmentVariables
        {
            get => _environmentVariables ?? (_environmentVariables = new InputList<Inputs.EnvironmentEnvironmentVariableArgs>());
            set => _environmentVariables = value;
        }

        /// <summary>
        /// Mode of the environment [NOTE: can't be updated after creation]. - Can be: `DEVELOPMENT`, `PREVIEW`, `PRODUCTION`,
        /// `STAGING`. - Default: `DEVELOPMENT`.
        /// </summary>
        [Input("mode")]
        public Input<string>? Mode { get; set; }

        /// <summary>
        /// Name of the environment.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// Id of the project.
        /// </summary>
        [Input("projectId", required: true)]
        public Input<string> ProjectId { get; set; } = null!;

        [Input("secretAliases")]
        private InputList<Inputs.EnvironmentSecretAliasArgs>? _secretAliases;

        /// <summary>
        /// List of secret aliases linked to this environment.
        /// </summary>
        public InputList<Inputs.EnvironmentSecretAliasArgs> SecretAliases
        {
            get => _secretAliases ?? (_secretAliases = new InputList<Inputs.EnvironmentSecretAliasArgs>());
            set => _secretAliases = value;
        }

        [Input("secretOverrides")]
        private InputList<Inputs.EnvironmentSecretOverrideArgs>? _secretOverrides;

        /// <summary>
        /// List of secret overrides linked to this environment.
        /// </summary>
        public InputList<Inputs.EnvironmentSecretOverrideArgs> SecretOverrides
        {
            get => _secretOverrides ?? (_secretOverrides = new InputList<Inputs.EnvironmentSecretOverrideArgs>());
            set => _secretOverrides = value;
        }

        [Input("secrets")]
        private InputList<Inputs.EnvironmentSecretArgs>? _secrets;

        /// <summary>
        /// List of secrets linked to this environment.
        /// </summary>
        public InputList<Inputs.EnvironmentSecretArgs> Secrets
        {
            get => _secrets ?? (_secrets = new InputList<Inputs.EnvironmentSecretArgs>());
            set => _secrets = value;
        }

        public EnvironmentArgs()
        {
        }
        public static new EnvironmentArgs Empty => new EnvironmentArgs();
    }

    public sealed class EnvironmentState : global::Pulumi.ResourceArgs
    {
        [Input("builtInEnvironmentVariables")]
        private InputList<Inputs.EnvironmentBuiltInEnvironmentVariableGetArgs>? _builtInEnvironmentVariables;

        /// <summary>
        /// List of built-in environment variables linked to this environment.
        /// </summary>
        public InputList<Inputs.EnvironmentBuiltInEnvironmentVariableGetArgs> BuiltInEnvironmentVariables
        {
            get => _builtInEnvironmentVariables ?? (_builtInEnvironmentVariables = new InputList<Inputs.EnvironmentBuiltInEnvironmentVariableGetArgs>());
            set => _builtInEnvironmentVariables = value;
        }

        /// <summary>
        /// Id of the cluster [NOTE: can't be updated after creation].
        /// </summary>
        [Input("clusterId")]
        public Input<string>? ClusterId { get; set; }

        [Input("environmentVariableAliases")]
        private InputList<Inputs.EnvironmentEnvironmentVariableAliasGetArgs>? _environmentVariableAliases;

        /// <summary>
        /// List of environment variable aliases linked to this environment.
        /// </summary>
        public InputList<Inputs.EnvironmentEnvironmentVariableAliasGetArgs> EnvironmentVariableAliases
        {
            get => _environmentVariableAliases ?? (_environmentVariableAliases = new InputList<Inputs.EnvironmentEnvironmentVariableAliasGetArgs>());
            set => _environmentVariableAliases = value;
        }

        [Input("environmentVariableOverrides")]
        private InputList<Inputs.EnvironmentEnvironmentVariableOverrideGetArgs>? _environmentVariableOverrides;

        /// <summary>
        /// List of environment variable overrides linked to this environment.
        /// </summary>
        public InputList<Inputs.EnvironmentEnvironmentVariableOverrideGetArgs> EnvironmentVariableOverrides
        {
            get => _environmentVariableOverrides ?? (_environmentVariableOverrides = new InputList<Inputs.EnvironmentEnvironmentVariableOverrideGetArgs>());
            set => _environmentVariableOverrides = value;
        }

        [Input("environmentVariables")]
        private InputList<Inputs.EnvironmentEnvironmentVariableGetArgs>? _environmentVariables;

        /// <summary>
        /// List of environment variables linked to this environment.
        /// </summary>
        public InputList<Inputs.EnvironmentEnvironmentVariableGetArgs> EnvironmentVariables
        {
            get => _environmentVariables ?? (_environmentVariables = new InputList<Inputs.EnvironmentEnvironmentVariableGetArgs>());
            set => _environmentVariables = value;
        }

        /// <summary>
        /// Mode of the environment [NOTE: can't be updated after creation]. - Can be: `DEVELOPMENT`, `PREVIEW`, `PRODUCTION`,
        /// `STAGING`. - Default: `DEVELOPMENT`.
        /// </summary>
        [Input("mode")]
        public Input<string>? Mode { get; set; }

        /// <summary>
        /// Name of the environment.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// Id of the project.
        /// </summary>
        [Input("projectId")]
        public Input<string>? ProjectId { get; set; }

        [Input("secretAliases")]
        private InputList<Inputs.EnvironmentSecretAliasGetArgs>? _secretAliases;

        /// <summary>
        /// List of secret aliases linked to this environment.
        /// </summary>
        public InputList<Inputs.EnvironmentSecretAliasGetArgs> SecretAliases
        {
            get => _secretAliases ?? (_secretAliases = new InputList<Inputs.EnvironmentSecretAliasGetArgs>());
            set => _secretAliases = value;
        }

        [Input("secretOverrides")]
        private InputList<Inputs.EnvironmentSecretOverrideGetArgs>? _secretOverrides;

        /// <summary>
        /// List of secret overrides linked to this environment.
        /// </summary>
        public InputList<Inputs.EnvironmentSecretOverrideGetArgs> SecretOverrides
        {
            get => _secretOverrides ?? (_secretOverrides = new InputList<Inputs.EnvironmentSecretOverrideGetArgs>());
            set => _secretOverrides = value;
        }

        [Input("secrets")]
        private InputList<Inputs.EnvironmentSecretGetArgs>? _secrets;

        /// <summary>
        /// List of secrets linked to this environment.
        /// </summary>
        public InputList<Inputs.EnvironmentSecretGetArgs> Secrets
        {
            get => _secrets ?? (_secrets = new InputList<Inputs.EnvironmentSecretGetArgs>());
            set => _secrets = value;
        }

        public EnvironmentState()
        {
        }
        public static new EnvironmentState Empty => new EnvironmentState();
    }
}
