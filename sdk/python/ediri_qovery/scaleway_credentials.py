# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import copy
import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union, overload
from . import _utilities

__all__ = ['ScalewayCredentialsArgs', 'ScalewayCredentials']

@pulumi.input_type
class ScalewayCredentialsArgs:
    def __init__(__self__, *,
                 organization_id: pulumi.Input[str],
                 scaleway_access_key: pulumi.Input[str],
                 scaleway_project_id: pulumi.Input[str],
                 scaleway_secret_key: pulumi.Input[str],
                 name: Optional[pulumi.Input[str]] = None):
        """
        The set of arguments for constructing a ScalewayCredentials resource.
        :param pulumi.Input[str] organization_id: Id of the organization.
        :param pulumi.Input[str] scaleway_access_key: Your SCALEWAY access key id.
        :param pulumi.Input[str] scaleway_project_id: Your SCALEWAY project ID.
        :param pulumi.Input[str] scaleway_secret_key: Your SCALEWAY secret key.
        :param pulumi.Input[str] name: Name of the scaleway credentials.
        """
        pulumi.set(__self__, "organization_id", organization_id)
        pulumi.set(__self__, "scaleway_access_key", scaleway_access_key)
        pulumi.set(__self__, "scaleway_project_id", scaleway_project_id)
        pulumi.set(__self__, "scaleway_secret_key", scaleway_secret_key)
        if name is not None:
            pulumi.set(__self__, "name", name)

    @property
    @pulumi.getter(name="organizationId")
    def organization_id(self) -> pulumi.Input[str]:
        """
        Id of the organization.
        """
        return pulumi.get(self, "organization_id")

    @organization_id.setter
    def organization_id(self, value: pulumi.Input[str]):
        pulumi.set(self, "organization_id", value)

    @property
    @pulumi.getter(name="scalewayAccessKey")
    def scaleway_access_key(self) -> pulumi.Input[str]:
        """
        Your SCALEWAY access key id.
        """
        return pulumi.get(self, "scaleway_access_key")

    @scaleway_access_key.setter
    def scaleway_access_key(self, value: pulumi.Input[str]):
        pulumi.set(self, "scaleway_access_key", value)

    @property
    @pulumi.getter(name="scalewayProjectId")
    def scaleway_project_id(self) -> pulumi.Input[str]:
        """
        Your SCALEWAY project ID.
        """
        return pulumi.get(self, "scaleway_project_id")

    @scaleway_project_id.setter
    def scaleway_project_id(self, value: pulumi.Input[str]):
        pulumi.set(self, "scaleway_project_id", value)

    @property
    @pulumi.getter(name="scalewaySecretKey")
    def scaleway_secret_key(self) -> pulumi.Input[str]:
        """
        Your SCALEWAY secret key.
        """
        return pulumi.get(self, "scaleway_secret_key")

    @scaleway_secret_key.setter
    def scaleway_secret_key(self, value: pulumi.Input[str]):
        pulumi.set(self, "scaleway_secret_key", value)

    @property
    @pulumi.getter
    def name(self) -> Optional[pulumi.Input[str]]:
        """
        Name of the scaleway credentials.
        """
        return pulumi.get(self, "name")

    @name.setter
    def name(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "name", value)


@pulumi.input_type
class _ScalewayCredentialsState:
    def __init__(__self__, *,
                 name: Optional[pulumi.Input[str]] = None,
                 organization_id: Optional[pulumi.Input[str]] = None,
                 scaleway_access_key: Optional[pulumi.Input[str]] = None,
                 scaleway_project_id: Optional[pulumi.Input[str]] = None,
                 scaleway_secret_key: Optional[pulumi.Input[str]] = None):
        """
        Input properties used for looking up and filtering ScalewayCredentials resources.
        :param pulumi.Input[str] name: Name of the scaleway credentials.
        :param pulumi.Input[str] organization_id: Id of the organization.
        :param pulumi.Input[str] scaleway_access_key: Your SCALEWAY access key id.
        :param pulumi.Input[str] scaleway_project_id: Your SCALEWAY project ID.
        :param pulumi.Input[str] scaleway_secret_key: Your SCALEWAY secret key.
        """
        if name is not None:
            pulumi.set(__self__, "name", name)
        if organization_id is not None:
            pulumi.set(__self__, "organization_id", organization_id)
        if scaleway_access_key is not None:
            pulumi.set(__self__, "scaleway_access_key", scaleway_access_key)
        if scaleway_project_id is not None:
            pulumi.set(__self__, "scaleway_project_id", scaleway_project_id)
        if scaleway_secret_key is not None:
            pulumi.set(__self__, "scaleway_secret_key", scaleway_secret_key)

    @property
    @pulumi.getter
    def name(self) -> Optional[pulumi.Input[str]]:
        """
        Name of the scaleway credentials.
        """
        return pulumi.get(self, "name")

    @name.setter
    def name(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "name", value)

    @property
    @pulumi.getter(name="organizationId")
    def organization_id(self) -> Optional[pulumi.Input[str]]:
        """
        Id of the organization.
        """
        return pulumi.get(self, "organization_id")

    @organization_id.setter
    def organization_id(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "organization_id", value)

    @property
    @pulumi.getter(name="scalewayAccessKey")
    def scaleway_access_key(self) -> Optional[pulumi.Input[str]]:
        """
        Your SCALEWAY access key id.
        """
        return pulumi.get(self, "scaleway_access_key")

    @scaleway_access_key.setter
    def scaleway_access_key(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "scaleway_access_key", value)

    @property
    @pulumi.getter(name="scalewayProjectId")
    def scaleway_project_id(self) -> Optional[pulumi.Input[str]]:
        """
        Your SCALEWAY project ID.
        """
        return pulumi.get(self, "scaleway_project_id")

    @scaleway_project_id.setter
    def scaleway_project_id(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "scaleway_project_id", value)

    @property
    @pulumi.getter(name="scalewaySecretKey")
    def scaleway_secret_key(self) -> Optional[pulumi.Input[str]]:
        """
        Your SCALEWAY secret key.
        """
        return pulumi.get(self, "scaleway_secret_key")

    @scaleway_secret_key.setter
    def scaleway_secret_key(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "scaleway_secret_key", value)


class ScalewayCredentials(pulumi.CustomResource):
    @overload
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 name: Optional[pulumi.Input[str]] = None,
                 organization_id: Optional[pulumi.Input[str]] = None,
                 scaleway_access_key: Optional[pulumi.Input[str]] = None,
                 scaleway_project_id: Optional[pulumi.Input[str]] = None,
                 scaleway_secret_key: Optional[pulumi.Input[str]] = None,
                 __props__=None):
        """
        ## # ScalewayCredentials (Resource)

        Provides a Qovery SCALEWAY credentials resource. This can be used to create and manage Qovery SCALEWAY credentials.

        ## Example

        ```python
        import pulumi
        import ediri_qovery as qovery

        my_scaleway_creds = qovery.ScalewayCredentials("myScalewayCreds",
            organization_id=qovery_organization["my_organization"]["id"],
            scaleway_access_key="<your-scaleway-access-key>",
            scaleway_secret_key="<your-scaleway-secret-key>",
            scaleway_project_id="<your-scaleway-project-id>",
            opts=pulumi.ResourceOptions(depends_on=[qovery_organization["my_organization"]]))
        ```

        ## Import

        ```sh
         $ pulumi import qovery:index/scalewayCredentials:ScalewayCredentials my_scaleway_creds "<organization_id>,<scaleway_credentials_id>"
        ```

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] name: Name of the scaleway credentials.
        :param pulumi.Input[str] organization_id: Id of the organization.
        :param pulumi.Input[str] scaleway_access_key: Your SCALEWAY access key id.
        :param pulumi.Input[str] scaleway_project_id: Your SCALEWAY project ID.
        :param pulumi.Input[str] scaleway_secret_key: Your SCALEWAY secret key.
        """
        ...
    @overload
    def __init__(__self__,
                 resource_name: str,
                 args: ScalewayCredentialsArgs,
                 opts: Optional[pulumi.ResourceOptions] = None):
        """
        ## # ScalewayCredentials (Resource)

        Provides a Qovery SCALEWAY credentials resource. This can be used to create and manage Qovery SCALEWAY credentials.

        ## Example

        ```python
        import pulumi
        import ediri_qovery as qovery

        my_scaleway_creds = qovery.ScalewayCredentials("myScalewayCreds",
            organization_id=qovery_organization["my_organization"]["id"],
            scaleway_access_key="<your-scaleway-access-key>",
            scaleway_secret_key="<your-scaleway-secret-key>",
            scaleway_project_id="<your-scaleway-project-id>",
            opts=pulumi.ResourceOptions(depends_on=[qovery_organization["my_organization"]]))
        ```

        ## Import

        ```sh
         $ pulumi import qovery:index/scalewayCredentials:ScalewayCredentials my_scaleway_creds "<organization_id>,<scaleway_credentials_id>"
        ```

        :param str resource_name: The name of the resource.
        :param ScalewayCredentialsArgs args: The arguments to use to populate this resource's properties.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        ...
    def __init__(__self__, resource_name: str, *args, **kwargs):
        resource_args, opts = _utilities.get_resource_args_opts(ScalewayCredentialsArgs, pulumi.ResourceOptions, *args, **kwargs)
        if resource_args is not None:
            __self__._internal_init(resource_name, opts, **resource_args.__dict__)
        else:
            __self__._internal_init(resource_name, *args, **kwargs)

    def _internal_init(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 name: Optional[pulumi.Input[str]] = None,
                 organization_id: Optional[pulumi.Input[str]] = None,
                 scaleway_access_key: Optional[pulumi.Input[str]] = None,
                 scaleway_project_id: Optional[pulumi.Input[str]] = None,
                 scaleway_secret_key: Optional[pulumi.Input[str]] = None,
                 __props__=None):
        opts = pulumi.ResourceOptions.merge(_utilities.get_resource_opts_defaults(), opts)
        if not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')
        if opts.id is None:
            if __props__ is not None:
                raise TypeError('__props__ is only valid when passed in combination with a valid opts.id to get an existing resource')
            __props__ = ScalewayCredentialsArgs.__new__(ScalewayCredentialsArgs)

            __props__.__dict__["name"] = name
            if organization_id is None and not opts.urn:
                raise TypeError("Missing required property 'organization_id'")
            __props__.__dict__["organization_id"] = organization_id
            if scaleway_access_key is None and not opts.urn:
                raise TypeError("Missing required property 'scaleway_access_key'")
            __props__.__dict__["scaleway_access_key"] = None if scaleway_access_key is None else pulumi.Output.secret(scaleway_access_key)
            if scaleway_project_id is None and not opts.urn:
                raise TypeError("Missing required property 'scaleway_project_id'")
            __props__.__dict__["scaleway_project_id"] = None if scaleway_project_id is None else pulumi.Output.secret(scaleway_project_id)
            if scaleway_secret_key is None and not opts.urn:
                raise TypeError("Missing required property 'scaleway_secret_key'")
            __props__.__dict__["scaleway_secret_key"] = None if scaleway_secret_key is None else pulumi.Output.secret(scaleway_secret_key)
        secret_opts = pulumi.ResourceOptions(additional_secret_outputs=["scalewayAccessKey", "scalewayProjectId", "scalewaySecretKey"])
        opts = pulumi.ResourceOptions.merge(opts, secret_opts)
        super(ScalewayCredentials, __self__).__init__(
            'qovery:index/scalewayCredentials:ScalewayCredentials',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None,
            name: Optional[pulumi.Input[str]] = None,
            organization_id: Optional[pulumi.Input[str]] = None,
            scaleway_access_key: Optional[pulumi.Input[str]] = None,
            scaleway_project_id: Optional[pulumi.Input[str]] = None,
            scaleway_secret_key: Optional[pulumi.Input[str]] = None) -> 'ScalewayCredentials':
        """
        Get an existing ScalewayCredentials resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] name: Name of the scaleway credentials.
        :param pulumi.Input[str] organization_id: Id of the organization.
        :param pulumi.Input[str] scaleway_access_key: Your SCALEWAY access key id.
        :param pulumi.Input[str] scaleway_project_id: Your SCALEWAY project ID.
        :param pulumi.Input[str] scaleway_secret_key: Your SCALEWAY secret key.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = _ScalewayCredentialsState.__new__(_ScalewayCredentialsState)

        __props__.__dict__["name"] = name
        __props__.__dict__["organization_id"] = organization_id
        __props__.__dict__["scaleway_access_key"] = scaleway_access_key
        __props__.__dict__["scaleway_project_id"] = scaleway_project_id
        __props__.__dict__["scaleway_secret_key"] = scaleway_secret_key
        return ScalewayCredentials(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter
    def name(self) -> pulumi.Output[str]:
        """
        Name of the scaleway credentials.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="organizationId")
    def organization_id(self) -> pulumi.Output[str]:
        """
        Id of the organization.
        """
        return pulumi.get(self, "organization_id")

    @property
    @pulumi.getter(name="scalewayAccessKey")
    def scaleway_access_key(self) -> pulumi.Output[str]:
        """
        Your SCALEWAY access key id.
        """
        return pulumi.get(self, "scaleway_access_key")

    @property
    @pulumi.getter(name="scalewayProjectId")
    def scaleway_project_id(self) -> pulumi.Output[str]:
        """
        Your SCALEWAY project ID.
        """
        return pulumi.get(self, "scaleway_project_id")

    @property
    @pulumi.getter(name="scalewaySecretKey")
    def scaleway_secret_key(self) -> pulumi.Output[str]:
        """
        Your SCALEWAY secret key.
        """
        return pulumi.get(self, "scaleway_secret_key")

